import React from 'react'
import {Link} from 'react-router-dom'
import micON from '../images/micON.png'
import {HiMenu} from 'react-icons/hi'
import Sidebar from './Sidebar'
import { useGlobalContext } from "../helpers/context";

import { UserAuth } from '../../context/AuthContext';
const Navbar = () => {
    const {isOpen,openSidebar,isRegistered,isDesktop} = useGlobalContext()
    const {user}=UserAuth()

  return (
    <nav className='navbar'>
        <div className="nav-column-1">
            <div className="nav-column-1-center">
                <Link className='nav-logo' to={`/`}><img src={micON} alt="" /></Link>
           {isDesktop && <div className="nav-routes-div-1">
                <Link className='nav-btn' to={`/music`}>Music</Link>
                <Link className='nav-btn' to={`/news`}>News</Link>
                <Link className='nav-btn' to={`/sport`}>Sport</Link>
                <Link className='nav-btn-more' to={`/categories`}>Listen Now</Link>

            </div>}
            </div>
        </div>
            <div className="nav-column-2">
            {isDesktop&& <div className="nav-routes-div-2">
                {user?(<Link className='nav-btn' to={`/profile`}>My Account</Link>):(
                    <>
                    <Link className='nav-btn' to={`/login`}>Sign In</Link>
                    <Link className='nav-btn' to={`/register`}>Sign Up</Link>
                    </>
                )}
            </div>}
           {!isDesktop && <div className="mobile-menu">
           <HiMenu onClick={openSidebar} className='hamburger-btn'/>
           <Sidebar/>
           </div> }
        </div>
    </nav>
  )
}

export default Navbar