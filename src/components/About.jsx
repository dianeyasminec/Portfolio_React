import React from 'react'
import { Table } from 'react-bootstrap';



export default function About(props) {

  const{
  skills,
abilities,
interests} = props

   console.log(abilities)


  return (
    <div id='about'>
      <h2  className='text-center  text-light display-5 py-4'>
         About
          </h2>
       <div className='container-fluid  '>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-10  '>
    <div className="d-flex justify-content-evenly">
      <div className='skills  card h-10 shadow rounded '> 
        <h2 className=" text-center text-light ">
        Technical skills
          </h2>
        <Table striped bordered hover variant="">
      <thead>
            {skills.map((skill)=>{
  return ( 
    <tr>
        <div className='d-flex justify-content-evenly text-light'>
             
             <td>
      {skill.skillname}
      </td>
      </div>
      </tr>
    
  )
})}
  </thead>
      </Table>
      </div>

      {/* here */}

      <div className=' card h-10 shadow rounded '> 
        <h2 className=" text-center text-light">
        Professional skills
          </h2>
        <Table striped bordered hover variant="">
      <thead>
            {abilities.map((technical)=>{
  return ( 
    <tr>
        <div className='d-flex justify-content-evenly text-light'>
             
             <td>
      {technical.ability}
      </td>
      </div>
      </tr>
    
  )
})}
  </thead>
      </Table>
      </div>

      {/* here 3 */}

      <div className='card h-10 shadow rounded  '> 
        <h2 className=" text-center text-light">
        Interests
          </h2>
        <Table striped bordered hover variant="">
      <thead>
            {interests.map((interest)=>{
  return ( 
    <tr>
        <div className='d-flex justify-content-between text-light'>
             
             <td>
      {interest.hobby}
      </td>
      </div>
      </tr>
    
  )
})}
  </thead>
      </Table>
      </div>
     
     





     </div>
     </div>
    </div>
    </div>
    </div>
  )
}
