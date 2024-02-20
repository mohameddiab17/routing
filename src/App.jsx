import React from 'react'
import Layout from './Components/Layout/Layout'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Layout/Home/Home'
import About from './Components/Layout/About/About'
import Contact from './Components/Layout/Contact/Contact'
import Portfolio from './Components/Layout/Portfolio/Portfolio'
import Notfound from './Components/shared/Notfound'

export default function App() {

  const routers = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {path:'' , element:<Navigate to={'home'}/>},
      {path:'home' , element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'portfolio' , element:<Portfolio/>},
      {path:'contact' , element:<Contact/>},
      {path:'*' , element:<Notfound/>}
    ]}
  ])
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}
