import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Üye ol</NavLink></li>
        <li><NavLink to='/signin'>Giriş</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks