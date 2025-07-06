import React from 'react'
import './footer.css';
import { FaFacebook, FaTwitter } from "react-icons/fa6";

import { RiInstagramFill } from "react-icons/ri";



export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
            &copy;2025 Your E-Learning Platform.All rights reserved.<br/>
            Made with ❤️❤️ <a href="">Chandani Vishwakarma</a>
        </p>
        <div className="social-links">
            <a href=""><FaFacebook /></a>
            <a href="">< FaTwitter/></a>
            <a href="">< RiInstagramFill />
            </a>
           
        </div>
      </div>
    </footer>
  )
}
