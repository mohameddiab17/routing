import React from 'react'
import img1 from '.././../../Assets/SVGs/img1.svg'


export default function Homecap() {
  return (
    <div className=" text-white home container-fluid position-relative d-flex justify-content-center align-items-center flex-column p-5 ">
      <img src={img1} alt="boy"  className='image-one m-5 '/>
      <h2 className=' fs-2 pb-3'>START FRAMEWORK</h2>
      <div className=' text-white fs-3'>Graphic Artist - Web Designer - Illustrator</div>
    </div>
  )
}
