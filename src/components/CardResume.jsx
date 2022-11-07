import React from 'react'
import { Button } from 'react-bootstrap';

export default function CardResume(props) {

  const {name,
  language,
  description,
  link
} = props

  return (
    <>
    <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4  '>
      <div className='card h-10 shadow rounded'>
        <div className='card-body text-light lead'>
     <div className='d-flex justify-content-evenly '>
   <h3 className='card-title  text-light' >{name}</h3>
   </div>
   <p  className='card-text  text-light'>{language}</p>
   <p className=''>{description}</p>
   <div className='d-grid justify-content-end mt-'>
    <Button 
    href={link}
    target="_blank" rel="noopener noreferrer"
    variant="outline-light lead">Link</Button>
   </div>

  </div>
    </div>
    </div>
</>
  )
}
