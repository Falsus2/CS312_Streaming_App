import React, {useEffect, useState} from "react";
import axios from "axios";
import TestFormSignIn from "./TestFormSignin"
import TestFormSignup from "./TestFormSignup"


function App() {

  const [backendData, setBackendData] = useState([{}])

  const fetchData = async () => {
    const response = await axios.get("/api");
    setBackendData(response.data);
  }

  const [auth, setAuth] = useState({});
  
  async function checkSession() {
    try {
      const response = await axios.get("/session");
      setAuth(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
    checkSession();
  }, [])

  return (
    <div>
      {/* <TestFormSignIn startSession={checkSession}/>
      <TestFormSignup startSession={checkSession}/> */}

      {(typeof backendData.message === 'undefined') ? (
        <h1>Loading...</h1>
      ): (
        <div>
          <h1>{backendData.message}</h1>
          <p>User: {auth.user}</p>
        </div>
      )}
      
    </div>
  )
}

export default App;