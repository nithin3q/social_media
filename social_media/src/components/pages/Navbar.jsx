import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import AuthenticationModal from './AuthenticationModal'; // Import the AuthenticationModal component

function NavBar({ handleNavContainerPosition }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showAccountOptions, setShowAccountOptions] = useState(false); // State for showing account options

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // Function to toggle visibility of account options
  const toggleAccountOptions = () => {
    setShowAccountOptions(!showAccountOptions);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-md fixed-top bg-white d-none d-sm-block border-bottom border-dark`}>
        <div className='container'>
          <Link to='/h'>
            <img src={logo} alt='Logo' className='logo' style={{ width: '220px', height: '74px' }} />
          </Link>
          <button className='navbar-toggler' type='button' onClick={handleNavCollapse}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='box'>
            <span className=''>
              <FontAwesomeIcon icon={faSearch} size='sm' />
            </span>
            <input
              className=''
              type='search'
              placeholder='Search for your favorite groups in ATG '
              aria-label='Search'
            />
          </div>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`}>
            <ul className={`nav nav-pills ms-auto ${isNavCollapsed ? 'navbar-horizontal' : 'flex-column text-center bg-white'}`}>
              <li className='nav-item' onClick={toggleAccountOptions}>
                Create account. <span>It’s free!</span> <FontAwesomeIcon icon={showAccountOptions ? faCaretUp : faCaretDown} />
              </li>
              {showAccountOptions && (
                <AuthenticationModal /> // Render the AuthenticationModal component
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
