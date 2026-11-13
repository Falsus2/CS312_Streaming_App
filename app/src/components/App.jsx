import React, {useEffect, useState} from "react";
import axios from "axios";
import TestFormSignIn from "./TestFormSignin"
import TestFormSignup from "./TestFormSignup"
import MediaList from "./MediaList"


function App() {
  
  // FETCHING MOVIE AND TV DETAILS

  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTv, setPopularTV] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);

  const fetchPopularMovies = async () => {
    
    try{
      const response = await axios.get("/api/movies/popular");
      setPopularMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
    
  }

  const fetchPopularTV = async () => {

    try {
      const response = await axios.get("/api/tv/popular");
      setPopularTV(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchTrendingMovies = async () => {

    try {
      const response = await axios.get("/api/movies/trending");
      setTrendingMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchTrendingTV = async () => {

    try {
      const response = await axios.get("/api/tv/trending");
      setTrendingTV(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  
  
  
  
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
    fetchPopularMovies();
    fetchPopularTV();
    fetchTrendingTV();
    fetchTrendingMovies();
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
      
      <h2>Popular Movies</h2>
      <MediaList mediaItems={popularMovies}/>
      <h2>Popular TV</h2>
      <MediaList mediaItems={popularTv}/>
      
      <h2>Trending Movies This Week!</h2>
      <MediaList mediaItems={trendingMovies}/>
      <h2>Trending TV This Week!</h2>
      <MediaList mediaItems={trendingTV}/>

    </div>
  )
}

export default App;