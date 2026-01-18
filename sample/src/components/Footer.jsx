import React from 'react'

const Footer = () => {
  return (
    <div className='justify-between'>
    <div className="">
        <div className="footer-column">
            <h3>Company</h3>
            <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Resources</h3>
            <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#support">Support</a></li>
            </ul>
        </div>
    </div>
    <div className=''>
         <div className="footer-column">
            <h3>Connect</h3>
            <p>123 Business Lane, City, State, 12345</p>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
    </div>
       
    <div className="inline-block">
        <p>&copy; <span id="year"></span> Company, Inc. All rights reserved.</p>
        <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
        </div>
    </div>
    </div>
  )
}

export default Footer