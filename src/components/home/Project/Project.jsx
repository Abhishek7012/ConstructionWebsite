// import React from "react"
// import Heading from "../../common/Heading"
// import { location } from "../../data/Data"
// import "./style.css"

// const Location = () => {
//   return (
//     <>
//       <section className='location padding'>
//         <div className='container'>
//           <Heading title='My Projects'  />

//           <div className='content grid3 mtop'>
//             {location.map((item, index) => (
//               <div className='box' key={index}>
//                 <img src={item.cover} alt='' />
//                 <div className='overlay'>
//                   <h5>{item.name}</h5>
//                   <p>
//                     <label>{item.Villas}</label>
//                     <label>{item.Offices}</label>
//                     <label>{item.Apartments}</label>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
    
//         </div>
//       </section>
//     </>
//   )
// }

// export default Location


import React from "react"
import Heading from "../../common/Heading"
// import RecentCard from "../recent/RecentCard"
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
