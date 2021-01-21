import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header"

function App() {
  const [nasaInfo, setNasaInfo] = useState({})

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then((res) =>{
      setNasaInfo(res.data)
    }).catch((res) =>{
      console.log(res)
    })},[])
  return (
    <div className="App">
      <Header nasaInfo = {nasaInfo}/>
      <p>
       <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
