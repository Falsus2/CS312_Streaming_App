import React, {useEffect, useState} from "react";
import axios from "axios";
import TestFormSignIn from "./TestFormSignin"
import TestFormSignup from "./TestFormSignup"
import MediaData from "./MediaData";


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


      <MediaData
        title="Popular Movies" 
        endpoint="/api/movies/popular"
      />
      <MediaData
        title="Popular TV" 
        endpoint="/api/tv/popular"
      />
      <MediaData
        title="Trending Movies This Week!"
        endpoint="/api/movies/trending"
      />

      <MediaData 
        title="Trending TV This Week!"
        endpoint="/api/tv/trending"
      />
      

    </div>
  )
}

export default App;