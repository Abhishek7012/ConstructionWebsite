import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Services = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='OUR SERVICES' />
          <h2 style={{ textAlign: 'center', color:'#16425b'}}> What we do offer</h2>
          <h4 style={{ textAlign: 'center', color:'#16425b'}}> As a leader in our industry, we have always worked to develop advanced technology and innovative methods.</h4>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Services
