import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestFormSignIn from "./TestFormSignin";
import TestFormSignup from "./TestFormSignup";
import MediaData from "./MediaData";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


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

  const [movieSearch, setMovieSearch] = useState();

  return (
    <div className="d-flex">
      <Sidebar />
      <div className = "d-flex flex-column min-vh-100 main">
        <main className = "flex-shrink-0">
          {/* <TestFormSignIn startSession={checkSession}/>
          <TestFormSignup startSession={checkSession}/> */}
          <NavigationBar />
          
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
        </main>
        
        <Footer />
        
      </div>
    </div>
  )
}

export default App;