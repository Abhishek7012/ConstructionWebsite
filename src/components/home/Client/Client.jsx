import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Client = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading  title='Our Client'subtitle='Over 1,24,000+ Happy User Bei   ng With Us Still They Love Our Services' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Client;
