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
    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 '>
      <div className='card h-80 shadow rounded'>
        <div className='card-body text-light lead'>
     <div className='d-flex justify-content-between '>
   <h3 className='card-title  text-light' >{name}</h3>
   </div>
   <p  className='card-text  text-light'>{language}</p>
   <p className=''>{description}</p>
   <div className='d-grid justify-content-end mt-4'>
    <Button href={link}variant="outline-light lead">Link</Button>
   </div>

  </div>
    </div>
    </div>
</>
  )
}
