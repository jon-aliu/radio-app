import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa'
import micOnInverted from '../images/micONfooter.png'
import { useGlobalContext } from "../helpers/context";

const Footer = () => {
    const {isRegistered} = useGlobalContext()
  return (
    <footer className="footer">
        <div className="footer-first-row">
            <img className="footer-img"src={micOnInverted} alt="" />
            {!isRegistered &&<Link to={`/register`} className="footer-sign-up">Sign Up</Link>}
        </div>
        <div className="footer-second-row">
            <Link to={`https://www.facebook.com`} className='social-media-link'><FaFacebook/></Link>
            <Link to={`https://www.instagram.com`} className='social-media-link'><FaInstagram/></Link>
            <Link to={`https://www.twitter.com`} className='social-media-link'><FaTwitter/></Link>
        </div>
        <div className="footer-third-row">
            <h4>Copyright &copy; 2022 micON</h4>
            <div className="footer-more-div">
            <h4>All Rights Reserved</h4>
            <Link className='footer-end-links' to={`/privacy`}>Privacy</Link>
            <Link className='footer-end-links' to={`/terms`}>Terms</Link>
            <Link className='footer-end-links' to={`/api`}>Api</Link>
            </div>
        </div>
    </footer>
    )
}

export default Footer