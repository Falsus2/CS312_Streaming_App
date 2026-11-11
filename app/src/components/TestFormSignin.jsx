import React, { useState } from 'react'
import axios from 'axios';

function TestFormSignin(props) {

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const response = await axios.post("/login", {
      username: username,
      password: password
    });

    if (response.data.success) {
      props.startSession();
    } else {
      setErrorMessage("Username or password incorrect.");
    }
  }

  return (
    <section className="text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Login</h1>
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show p-1" role="alert">
            {errorMessage}
            <button type="button" className="btn-close p-2" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrorMessage("")}></button>
          </div>
          )}            
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" required />
              </div>
              <div className="col">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" required />
              </div>
            </div>
            <div className="text-center pt-2">
              Not a member? <a href="/signup">Register</a>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Sign In</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default TestFormSignin