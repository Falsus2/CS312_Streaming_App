# Online Streaming Rating Platform

A full-stack web app for discovering, searching, and rating movies, TV shows, and documentaries. Built with the **PERN** stack (PostgreSQL, Express.js, React, Node.js) for CS 312 at Northern Arizona University.

## Problem

With so many streaming services, it's hard to find high-quality films and shows that match your interests. Flix offers a seamless browsing experience, detailed title information, and community reviews so users can decide what to watch and share what they thought.

## Features

- **Browse titles**: Movies, TV shows, and documentaries pulled from the TMDB API, with posters, genres, release years, and ratings.
- **Title details**: Descriptions, genres, runtime, artwork, cast, directors, and release dates.
- **Search**: Search by title, genre, or actor, with live auto-suggestions and filters.
- **Reviews and ratings**: Signed-in users can write, edit, and delete their own reviews and star ratings. Average user ratings are calculated and displayed.
- **Sorting and filtering**: Sort by release date, rating, or popularity. Filter by genre, release year, and content type (movie, TV, documentary).
- **User accounts**: Sign up and sign in with secure password hashing and session-based authentication.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, React Router, Axios, Bootstrap |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Auth | Passport.js, express-session, argon2 |
| Data source | [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (running locally)
- A free [TMDB API key](https://www.themoviedb.org/settings/api) (needed once the TMDB integration is added)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Falsus2/CS312_Streaming_App.git
   cd CS312_Streaming_App
   ```

2. **Install dependencies**

   ```bash
   # backend
   cd server
   npm install

   # frontend
   cd ../app
   npm install
   ```

3. **Set up the database**

   Create a PostgreSQL database and run the schema found in `server/db/` to create the tables.

4. **Configure environment variables**

   Create a `.env` file in the `server/` directory:

   ```env
   SESSION_SECRET=""
   DB_PASSWORD=""
   ```

   - `SESSION_SECRET`: a long, random string used to sign session cookies
   - `DB_PASSWORD`: the password for your local PostgreSQL user

   A `TMDB_API_KEY` variable will be added once the API integration is implemented.

   > Never commit your `.env` file. Make sure it is listed in `.gitignore`.

### Running the App

Run the backend and frontend in separate terminals.

```bash
# terminal 1: backend (restarts automatically on file changes)
cd server
npm run dev
```

```bash
# terminal 2: frontend
cd app
npm start
```

## Project Structure

```
.
├── app/                    # React frontend
│   ├── public/             # Static files
│   └── src/
│       ├── components/     # NavBar, MovieCard, MovieList, review and auth forms
│       └── index.js
├── server/                 # Express backend
│   ├── db/                 # PostgreSQL schema
│   └── server.js
└── README.md
```

## Roadmap

### Phase 1: Foundation

- [ ] Page layout, navigation, and Bootstrap styling
- [ ] TMDB API integration and movie/TV listing
- [ ] User registration and login (Passport.js, express-session, argon2)
- [ ] PostgreSQL setup and backend integration

### Phase 2: Core Features

- [ ] User reviews and ratings (full CRUD for authenticated users)
- [ ] Search with auto-suggestions and actor search
- [ ] Sorting and filtering (genre, year, content type, rating, popularity)
- [ ] React Router navigation and detail pages with cast and crew

## Mock-Ups

Hand-drawn mock-ups cover the main screens:

1. **Sign in / Sign up**: username and password forms with links between them
2. **Home page**: search bar, filter sidebar (genres, actors, A-Z), and rows of titles grouped by genre
3. **Title details**: artwork, title, director, description, and a link to write a review, with user reviews below
4. **Write a review**: star rating selector and review text box
5. **Profile**: user info and a list of the user's own reviews

## Team

| Name | Focus |
| --- | --- |
| Nick Sondermeyer | Database, authentication, and reviews/ratings |
| Kenji Lebbon | Layout and styling, search, and suggestions |
| Kayleigh Anderson | TMDB integration, title listings, and detail pages |

## Acknowledgments

This product uses the TMDB API but is not endorsed or certified by TMDB.
