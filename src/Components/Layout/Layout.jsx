import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>

    <Outlet/>

    <Footer/>
    </>


    
  )
}
