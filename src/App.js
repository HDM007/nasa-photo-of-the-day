import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header"
import Image from "./components/Image"
import Placard from "./components/Placard"

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
      <Image nasaInfo = {nasaInfo} />
      <Placard nasaInfo = {nasaInfo} />
      {/* initial for styled components pull */}
    </div>
  );
}

export default App;
