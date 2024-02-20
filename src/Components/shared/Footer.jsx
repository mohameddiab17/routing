import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="container-fluid  ">
        <div className="row  gray-background text-white text-center  ">
            <div className="col-md-4 p-5 mb-5">
                <div className="item ">
                    <h3 className='font-tworem pb-2 fw-bold'>LOCATION</h3>
                    <p className='fs-4'>2215 John Daniel Drive</p>
                    <p className='fs-4'>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 p-5 mb-5">
                <div className="item">
                    <h3 className=' pb-3 font-tworem fw-bold'>AROUND THE WEB</h3>
                    <div className="icons ">
                        <i className='fa-brands fa-facebook pe-3 fs-2'></i>
                        <i className="fa-brands fa-x-twitter pe-3 fs-2"></i>
                        <i className="fa-brands fa-linkedin pe-3 fs-2"></i>
                        <i className="fa-solid fa-earth-americas pe-3 fs-2"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-5 mb-5">
                <div className="item">
                <h3 className=' pb-3 font-tworem fw-bold'>ABOUT FREELANCER</h3>
                <p className='fs-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        <div className="col-md-12">
        <div className="deep-footer  p-3 ">
        <p className='text-white fs-4'>Copyright © Your Website 2021</p>
        </div>
        </div>
        </div>
        
    </div>

    
    
    </>
  )
}
