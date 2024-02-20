import React from 'react'
import img1 from '../../../Assets/Imgs/poert1.png'
import img2 from '../../../Assets/Imgs/port2.png'
import img3 from '../../../Assets/Imgs/port3.png'


export default function Portfoliocap() {
  return (
    <>
    <div className="portfolio text-center p-5 position-relative">
        <h1 className=' fs-1 p-5 pb-2'>PORTFOLIO COMPONENT</h1>
    </div>
    <div className="container">
        <div className="row g-5 ">
        <div className="col-md-4">
            <div className="item d-flex justify-content-center align-items-center rounded-3 overflow-hidden ">
            <img src={img1} alt="poert1" className='w100 rounded-3' />
            </div>
        </div>
        <div className="col-md-4">
            <div className="item d-flex justify-content-center align-items-center rounded-3 overflow-hidden ">
            <img src={img2} alt="poert1" className='w100 rounded-3'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="item d-flex justify-content-center align-items-center rounded-3 overflow-hidden ">
            <img src={img3} alt="poert1" className='w100 rounded-3'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="item d-flex justify-content-center align-items-center rounded-3 overflow-hidden ">
            <img src={img1} alt="poert1" className='w100 rounded-3'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="item d-flex justify-content-center align-items-center rounded-3 overflow-hidden ">
            <img src={img2} alt="poert1" className='w100 rounded-3'/>
            </div>
        </div>
        <div className="col-md-4">
            <div className="item d-flex justify-content-center align-items-center rounded-3 overflow-hidden ">
            <img src={img3} alt="poert1" className='w100 rounded-3'/>
            </div>
        </div>
        
    </div>
    </div>
    </>
  )
}
