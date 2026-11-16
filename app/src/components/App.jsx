import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestFormSignIn from "./TestFormSignin";
import TestFormSignup from "./TestFormSignup";
import MediaData from "./MediaData";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SearchMediaData from "./SearchMediaData";

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
  const [isRenderSearch, setIsRenderSearch] = useState(false);
  const [movieArray, setMovieArray] = useState([{}]);

  async function handleSearchClick (event){
    event.preventDefault();

    setMovieSearch(event.target.searchInput.value);
    try{
      const response = await axios.get("/api/search", {
          params: {
            keyword: movieSearch
          }
      })
      const result = response.data;
      setMovieArray(result);
      setIsRenderSearch(true);
    }
    catch (err){
      console.log(err);
    }
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <div className = "d-flex flex-column min-vh-100 main">
        <main className = "flex-shrink-0">
          {/* <TestFormSignIn startSession={checkSession}/>
          <TestFormSignup startSession={checkSession}/> */}
          <NavigationBar searchClick={handleSearchClick} removeSearch={() => {setIsRenderSearch(false)}}/>
          
          {(typeof backendData.message === 'undefined') ? (
            <h1>Loading...</h1>
          ): (
            <div>
              <h1>{backendData.message}</h1>
              <p>User: {auth.user}</p>
            </div>
          )}
          
          {(isRenderSearch) ?
            (<SearchMediaData
            title="Search Results"
            movieArray={movieArray}
            />) : (null)
          }
          
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