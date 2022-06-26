import React from 'react'
import {Link} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import { useGlobalContext } from '../context'
const Sidebar = ({isOpen,setIsOpen}) => {
  const {closeSidebar} = useGlobalContext();
  return (
    <aside className={isOpen?"sidebar open":"sidebar"}>
        <div className="side-title">
        <h1>Menu</h1>
        <HiMenu onClick={closeSidebar} className='hamburger-btn-2'/>
        </div>
        <div className="side-links">
        <Link className='nav-btn' to={`/music`}>Music</Link>
                <Link className='nav-btn' to={`/news`}>News</Link>
                <Link className='nav-btn' to={`/sport`}>Sport</Link>
                <Link className='nav-btn-more' to={`/more`}>Listen Now</Link>
                <div className="sign-links">
                    
                <Link className='nav-btn other' to={`/login`}>Sign In</Link>
                <Link className='nav-btn other' to={`/register`}>Sign Up</Link>
                </div>
        </div>
    </aside>
  )
}

export default Sidebar