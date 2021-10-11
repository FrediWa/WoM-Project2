import React from 'react';

function Header() {
  return (
    <header className='header'>
      <h4>🏡 Cabin Services</h4>
      <div class='header__buttons'>
        <a href='https://wom-project-1.herokuapp.com/' target='_blank' class='btn' rel="noreferrer">Rent A Cabin <i class="fas fa-external-link-alt"></i></a>
        <button class='btn'>Log Out <i class="fas fa-sign-out-alt"></i></button>
      </div>
    </header>
  );
}
  
export default Header;