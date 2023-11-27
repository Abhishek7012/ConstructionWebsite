import React from "react"
import Project from "./Project/Project"
import Intro from "./Intro/Intro"
import AboutUs from "./AboutUs/AboutUs"
import Services from "./Services/Services"
import Client from "./Client/Client"

const Home = () => {
  return (
    <>
    
      <Intro/>
      <AboutUs />
      <Services />
      <Client />
      <Project />
    </>
  )
}

export default Home
