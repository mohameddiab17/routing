import React from 'react'

export default function Contactcap() {
  return (
    <div className="contact ">

    <div className="contact-title p-5 position-relative">
    <h1 className='text-center fs-1 fw-bolder p-5 pb-2'>CONATCT SECTION</h1>
    </div>

    <div className="container">
    <div className="form">
        <input type="text" className='form-control border-none p-3 mb-4 border-0 border-bottom ' placeholder='userName ' />
        <input type="text" className='form-control border-none p-3 mb-4 border-0 border-bottom ' placeholder='userAge ' />
        <input type="text" className='form-control border-none p-3 mb-4 border-0 border-bottom ' placeholder='userEmail ' />
        <input type="text" className='form-control border-none p-3 mb-4 border-0 border-bottom ' placeholder='userPassword ' />
    </div>
    <button className='btn btn-outline-success p-3 m-3 fs-4'>Send Message</button>
    </div>
    
    </div>
  )
}
