import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
        <p className='copyright'>Copyright {new Date().getFullYear()} &copy; Cabin Services</p>
        <p>Made By: Fredi & Krullis <i className="fas fa-code"></i></p>
    </footer>
  );
}

export default Footer;