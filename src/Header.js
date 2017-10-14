import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className="heading">
        <h1 className="heading__name">JL</h1>
        <img src="/images/icon.svg" alt="ape icon" className='heading__icon' />
      </div>
      <nav className='nav'>
        <ul className='nav__ul'>
          <li className='nav__li'><NavLink exact to='/'>Home</NavLink></li>
          {/* <li className='nav__li'><NavLink exact to='/writings/'>Writings</NavLink></li> */}
          <li className='nav__li'><NavLink exact to='/contact/'>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
