import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [backendData, setBackendData] = useState([{}])

  const fetchData = async () => {
    const response = await axios.get("/api");
    setBackendData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>

      {(typeof backendData.message === 'undefined') ? (
        <h1>Loading...</h1>
      ): (
        <h1>{backendData.message}</h1>
      )}

    </div>
  )
}

export default App;