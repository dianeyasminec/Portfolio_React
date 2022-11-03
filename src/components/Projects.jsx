import React from 'react'
import CardResume from './CardResume'



export default function Projects (props) {
  const {
    projects
  } = props

  console.log(projects)

  return (
    <div id='projects'>
     <div className='container-fluid'>
          
      
        <h2  className='text-center  text-light display-5 py-5 '>
          Projects
          </h2>
          <div className='container '>
            <div className='row'>
              {projects.map((p,index) =>{
                return(
                  <CardResume name={p.name} language={p.language} description={p.description} link={p.link}/>
                )
              })}
              </div>
            </div>
          </div>
      

       
   
   
    </div>
  )
}
