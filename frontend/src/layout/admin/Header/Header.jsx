import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='d-flex justify-content-center'>
      <div className="container d-flex justify-content-between p-4 align-items-center">
        <img style={{cursor:"pointer"}} src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" />
        <ul className='header__menu d-flex gap-5 list-unstyled'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/admin/add">Add</Link></li>
      </ul>

      <ul className=' header__right d-flex gap-5 list-unstyled'>
        <li><i class="fa-solid fa-glasses"></i></li>
        <li><i class="fa-brands fa-facebook-f"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-solid fa-bars"></i></li>
      </ul>
      </div>
    </header>
  )
}

export default Header
