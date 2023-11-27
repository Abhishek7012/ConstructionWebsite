import React from "react"
import Heading from "../../common/Heading"
import "./Intro.css"

const Intro = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading style={{ color: 'white' }} title='If you can Imagine it,'  />
          <h1 style={{ textAlign: 'center', color:'white'}}> We can <span style={{ color: '#590d22' }}>build</span> it. </h1>
          <h2 style={{ textAlign: 'center',color: "white"}}>We are a people-orientated, progressive business, driven by our values to deliver lasting change for our stakeholders and the communities we work in.</h2>
        </div>
      </section>
    </>
  )
}

export default Intro
