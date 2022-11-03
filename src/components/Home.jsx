import React from 'react'
// import { Table} from 'react-bootstrap';



export default function Home(props) {

const {One,
skills} = props

console.log(skills)

 


  return (
    <>
    
    <div id='home' >
    
    <section>
  <div className="content2">
    <h2>Diane</h2>
    <h2>Diane</h2>
  </div>
</section>
<p className=' lead text-light  text text-center '> 
     
     Hi there ! Thanks for visiting my Porfolio, My name is Diane Compaore.
     I'm from West Africa, french is my first language.
     I am a developer with many years of experience in software development, 
     I love learning and helping people. I value lifting up my teammates and 
     want my work to empower others. Skilled in HTML, CSS, JavaScript, React.js, 
     and Bootstrap 5. I am  open to remote, hybrid, or site 
     roles. I have my CV available in case you help . Thanks 
     </p>

    {/* <div className='container-fluid py-3'>
    <div className="d-flex justify-content-start">
      <img src={One} alt='img' className='imgOne'/>
     
      <p className=' lead text-light  text '> 
     
        Hi there ! Thanks for visiting my Porfolio, My name is Diane Compaore.
        I'm from West Africa, french is my first language.
        I am a developer with many years of experience in software development, 
        I love learning and helping people. I value lifting up my teammates and 
        want my work to empower others. Skilled in HTML, CSS, JavaScript, React.js, 
        and Bootstrap 5. I am  open to remote, hybrid, or site 
        roles. I have my CV available in case you help . Thanks 
        </p>
      
      
      </div>
      </div>  */}
    
      </div>
      </>
  )
}
