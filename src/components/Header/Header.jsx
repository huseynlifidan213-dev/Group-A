import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex gap-90 w-full h-[80px] bg-red-400'>
        <div className="logo">Logo</div>
        <nav>
            <ul className='flex gap-10'>
                <li className='underline'><Link to={"/"}>Home</Link></li>
                <li className='underline'><Link to={"/about"}>About</Link></li>
                <li className='underline'><Link to={"/contact"}>Contact</Link></li>
                <li className='underline'><Link to={"/signup"}>Signup</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header