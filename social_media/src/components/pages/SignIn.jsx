import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import logo from "../../assets/group3.jpg";
import google from "../../assets/google.svg";

import "../styles/signin.css";
import SignUp from "./SignUp";


const SignIn = ({ showSignIn, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
    handleClose();
  }

  return (
    <>
        <Modal
      show={showSignIn}
      onHide={handleClose}
      style={{ marginTop: "170px" }}
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton style={{ backgroundColor: "#dffde1" }}>
        <Modal.Title className="modal-title">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="login-container">
          <div className="login-left">
            <h3>Sign In</h3>
            <form>
              <input type="email" placeholder="Email" name="email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              <div className="login-left-buttons">
              <button
                  type="submit"
                  className="login-btn text-light border btn-primary rounded-5"
                >
                  Sign In
                </button>
                <button
                  type="submit"
                  className="login-btn bg-white text-dark border"
                >
                  <FaFacebook style={{ color: "#3b5998" }} />
                  &nbsp; Sign In with Facebook
                </button>
                <button
                  type="submit"
                  className="login-btn bg-white text-dark border"
                >
                  <img src={google} alt="" width={20}/>
                  &nbsp; Sign In with Google
                </button>
              </div>
              <div className="login-left-options text-center">
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
          <div className="login-right">
            <p className="login-right-p">
            Don’t have an account yet?  <Link to="/signup" className="primary"  onClick={handleSignUpClick}>
              Create new for free!</Link>
            </p>
            <img src={logo} alt="Logo" className="login-right-logo" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
    <SignUp showSignUp={showSignUpModal} handleClose={setShowSignUpModal} />
    </>
  );
};
export default SignIn;
