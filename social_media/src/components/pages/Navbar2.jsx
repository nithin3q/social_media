import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'
import Timeline from './Timeline';

function Navbar2({ isNavContainerFixed }) {
  return (
    <nav className={`navbar navbar-expand-md kims bg-white d-none d-sm-block `}>
    <div className={`nav-items-container containerss bg-white d-none d-sm-block d-flex fixed-top ${isNavContainerFixed ? '' : ''}`}>
        <ul className="nav-items">
          <li className="nav-item  kumar">All Posts(32)</li>
          <li className="nav-item">Article</li>
          <li className="nav-item">Event</li>
          <li className="nav-item">Education</li>
          <li className="nav-item">Job</li>
          <button className="nav-button nithin">Write a Post <FontAwesomeIcon icon={faCaretDown} /></button> &nbsp;
          <button className="nav-button kumars">Join Group</button>
        </ul>
         <hr className="hr-line"/>
      </div>
      <div>
      <ul className="nav-items d-lg-none d-xs-block bg-white">
          <li className="nav-item  kumar">Posts(368)</li>
          <button className="nav-button nithin">Filter <FontAwesomeIcon icon={faCaretDown} /></button> &nbsp;
          </ul>
      </div>
      </nav>
  );
}

export default Navbar2;
