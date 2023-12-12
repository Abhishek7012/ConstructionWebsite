import React from "react"
import Heading from "../../common/Heading"
import ProjectCard from "./ProjectCard"
import "./style.css"


const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Personal Projects' />
          <ProjectCard />
        </div>
      </section>
    </>
  )
}

export default Recent
