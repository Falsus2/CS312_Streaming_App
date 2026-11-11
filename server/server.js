import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
import argon2 from "argon2";
import session from "express-session";
import passport from "passport"
import { Strategy } from "passport-local";

const app = express();
const port = 5000;
env.config();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "StreamingDB",
  password: process.env.DB_PASSWORD,
  port: 5432,
});
db.connect();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Middleware to ensure authentication for future routes

function reqAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.sendStatus(401);
  console.log("Access denied.")
}

// Routes start here

app.get("/api", (req, res) => {
  res.json({ message: "From server" });
});

// Account functionality

app.post("/signup", async (req, res) => {
  const hashedPassword = await argon2.hash(req.body.password);
  try {
    await db.query("INSERT INTO users VALUES (($1), ($2), ($3), ($4))",
      [req.body.username, hashedPassword, req.body.name, req.body.email]
    );
    console.log("Created new user.");
    req.login(req.body.username, (err) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          message: "Error logging in to new user."
        })
      }
      res.json({
        success: true,
        message: "Created new user."
      })
    })
  } catch (err) {
    console.log("Username already in use, please use a different one.");
    res.json({
      success: false,
      message: "Username already in use, please use a different one."
    })
  }
});

app.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) { return next(err)}
    if (!user) { 
      return res.json({
        success: false,
        message: "Username or password incorrect",
      })
    }

    req.login(user, (err) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: "Error logging in."
        })
      }
      res.json({
        success: true,
        message: "Logged in.",
      });
      console.log("Logged in.")
    })
  })(req, res, next);
});

app.get("/session", async (req, res) => {
  res.json({
    isAuthenticated: req.isAuthenticated(),
    user: req.user || null
  });
});

// End routes

passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT password FROM users WHERE user_id = ($1)",
        [username]
      );
      if (result.rows.length > 0) {
        const hashedPassword = result.rows[0].password;
        if (await argon2.verify(hashedPassword, password)) {
          return cb(null, username);
        } else {
          console.log("Password incorrect.");
          return cb(null, false)
        }
      } else {
        console.log("No user found.");
        return cb(null, false);
      }
    } catch(err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
})

passport.deserializeUser((user, cb) => {
  cb(null, user);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});