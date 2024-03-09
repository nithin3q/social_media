import { Image } from "react-bootstrap";
import React from "react";
import "../styles/Suggestions.css";
import logo from '../../assets/4.png'
import logo2 from '../../assets/5.png'
import logo3 from '../../assets/6.png'
import logo4 from '../../assets/7.png'

function Suggestions() {
  return (
    <div className="suggestions ">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Image src={logo} roundedCircle />
            </span>
            <div className="username__info">
              <span className="username">Philosophy</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Image src={logo2} roundedCircle />
            </span>
            <div className="username__info">
              <span className="username">MBA</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Image src={logo3} roundedCircle />
            </span>
            <div className="username__info">
              <span className="username">Activism</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Image src={logo4} roundedCircle />
            </span>
            <div className="username__info">
              <span className="username">Leisure</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}
export default Suggestions;
