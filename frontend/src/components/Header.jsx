import React from 'react';

const logout = () => {
  console.log("Log out");
  document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function Header() {
  return (
    <header className='header'>
      <h4>🏡 Cabin Services</h4>
      <div class='header__buttons'>
        <a href='https://wom-project-1.herokuapp.com/' target='_blank' class='btn' rel="noreferrer">Rent A Cabin <i class="fas fa-external-link-alt"></i></a>
        <button onClick={logout} class='btn'>Log Out <i class="fas fa-sign-out-alt"></i></button>
      </div>
    </header>
  );
}
  
export default Header;