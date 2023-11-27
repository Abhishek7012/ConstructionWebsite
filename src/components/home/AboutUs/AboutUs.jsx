import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import Back from "../../common/Back"
// import Heading from "../common/Heading"
import img from "../../images/about.jpg"

const AboutUs = () => {
  return (
    <>
     <section className='about'>
        <Back  title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Maharastra Construction' />
            <p>We are a well established construction company with over 20 years experience. Specialising in the public and private sector, We strive to form close working relationships with clients and industry professionals to provide a full service that reflects attention to detail and quality, put simply we build solutions together.</p>

            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
