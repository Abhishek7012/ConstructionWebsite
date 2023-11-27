import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Project from "../home/Project/Project"
import Services from "../home/Services/Services"
import Client from "../home/Client/Client"
import AboutUs from "../home/AboutUs/AboutUs"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/client' component={Client} />
          <Route exact path='/project' component={Project} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
