import React from 'react';

function Footer() {
  return (
    <footer class='footer'>
        <p class='copyright'>Copyright {new Date().getFullYear()} &copy; Cabin Services</p>
        <p>Made By: Fredi & Krullis <i class="fas fa-code"></i></p>
    </footer>
  );
}

export default Footer;