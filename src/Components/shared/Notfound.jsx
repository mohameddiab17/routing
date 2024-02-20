import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='text-center text-danger  my-5 py-5'>
        <h1 className='fs-1 '>404</h1>
        <h2 className='p-5'>Page Not Found</h2>
        <Link   to={''}>
        <button className='btn btn-outline-dark p-5 fs-2'>Go To Home Page</button>
        </Link>
    </div>
  )
}
