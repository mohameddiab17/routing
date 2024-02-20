import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [pathName , setPathName] = useState(window.location.pathname)

  return (
    <nav className="navbar navbar-expand-lg pb-5 ">
  <div className="container-fluid  fixed-top gray-background d-flex justify-content-center">

    <div className="container py-4 d-flex justify-content-center align-items-center">
    <a className="fw-bolder fs-1 text-white navbar-brand" href="#">START FRAMEWORK</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link onClick={()=> {setPathName('about')}} className={  pathName==='/about' ? 'nav-link bg-nav  text-white fs-3 pe-lg-4' : 'nav-link  text-white fs-3 pe-lg-4'} to={'about'}>About</Link>
        </li>
        <li className="nav-item ">
          <Link onClick={()=> {setPathName('portfolio')}} className={pathName==='/protfolio' ? 'nav-link bg-nav text-white fs-3 pe-lg-4' : 'nav-link  text-white fs-3 pe-lg-4'} to={'portfolio'} >Portfolio</Link>
        </li>
        <li className="nav-item ">
          <Link onClick={()=> {setPathName('contact')}} className={pathName==='/contact' ? 'nav-link bg-nav text-white fs-3 pe-lg-4' : 'nav-link  text-white fs-3 pe-lg-4'} to={'contact'} >contact</Link>
        </li>
      </ul>
    </div>
    </div>

  </div>
</nav>
  )
}
