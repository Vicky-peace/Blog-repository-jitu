import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className= "nav">
      <h2 className="nav-brand">TechBlog</h2>
      <ul className='navlinks'>
       <li >Home</li>
       <li> About</li>
       <li >Blog</li>
       <li>Contacts</li>
      </ul>
    </div>
  )
}

export default Navbar
