import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Joblisting from "../components/Joblisting";
import { AppContextProvider } from "../context/AppContext";
import AppDownload from "../components/AppDownload";

const Home= () =>{
  return(
    <div>
        <Navbar/>
        <Hero/>
        <Joblisting/>
        <AppDownload/>
    </div>
  )
}
export default Home