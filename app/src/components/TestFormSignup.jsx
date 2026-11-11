import React, { useState} from 'react'
import axios from 'axios';

function TestFormSignup(props) {
  
  const [errorMessage, setErrorMessage] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    const name = e.target.name.value
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    
    const response = await axios.post("/signup", {
      name: name,
      username: username,
      password: password,
      email: email
    });
    
    if (response.data.success) {
      await props.startSession();
    } else {
      setErrorMessage(response.data.message);
    }
  }
  
  return (
    <section className="text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Create Account</h1>
          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show p-1" role="alert">
            {errorMessage}
            <button type="button" className="btn-close p-2" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrorMessage("")}></button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" required />
            <div className="row">
              <div className="col">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" required />
              </div>
              <div className="col">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" required />
              </div>
              <div className="col">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Create Account</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default TestFormSignup