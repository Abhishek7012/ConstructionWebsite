import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/Logo3.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>

          </div>
         <div className='box2'>
<div><a href="https://github.com/Abhishek7012"> <FaGithub  />Github</a></div>         
<div style={{marginTop:"50px"}}><a href="https://www.linkedin.com/in/abhishek-mishra-a929951a3/"> <FaLinkedin  />LinkedIN</a></div>         
<div style={{marginTop:"50px"}}><a > <FaFacebook  />FaceBook</a></div>         
<div style={{marginTop:"50px"}}><a > <FaInstagram  />Instagram</a></div>         
           
         </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023  Designd By Abhishek Mishra.</span>
      </div>
    </>
  )
}

export default Footer
