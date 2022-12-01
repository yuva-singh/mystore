import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center py-2">
        <div className="col-lg-5">
          <h1 className='fw-bold display-2'>404</h1>
          <h4>oops ! You are lost</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum temporibus fugiat mollitia, rem harum explicabo atque quam esse molestias.</p>
           <Link to="/">
           <button className='btn btn-dark'>BACK TO HOME</button>
           </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotFound