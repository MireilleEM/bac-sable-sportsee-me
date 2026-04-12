import React from 'react';
import './Footer.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© SportSee. Tous droits réservés.</p>
      </div>
      <div className="footer-logo">
        <p className="footer-text">Conditions générales</p>
        <p className="footer-text">Contact</p>
        <div className="footer-logo-container">
        <Image 
            src="/Logo-icon.png" 
            alt="Logo icone SportSee" 
            width={20} 
            height={20} 
          />
        </div>
      </div>
      
    </footer>
  )
  };
  export default Footer;