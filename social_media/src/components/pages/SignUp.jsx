import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import logo from "../../assets/group3.jpg";
import "../styles/signin.css";
import SignIn from "./SignIn";
const SignUp = ({ showSignUp, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleSignInClick = () => {
    setShowSignInModal(true);
    handleClose();
  };

  return (
    <>
      <Modal
        show={showSignUp}
        onHide={handleClose}
        style={{ marginTop: "150px" }}
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
              <h3>Create Account</h3>
              <form>
                <div className="name-inputs d-flex">
                  <input type="text" placeholder="First Name" name="text" />
                  <input type="text" placeholder="Last Name" name="text" />
                </div>
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
                />
                <div className="login-left-buttons">
                  <button
                    type="submit"
                    className="login-btn text-light border btn-primary rounded-5"
                  >
                    Sign Up
                  </button>
                  <button
                    type="submit"
                    className="login-btn bg-white text-dark border"
                  >
                    <FaFacebook style={{ color: "#3b5998" }} />
                    &nbsp; Sign Up with Facebook
                  </button>
                  <button
                    type="submit"
                    className="login-btn bg-white text-dark border"
                  >
                    <FaGoogle style={{ color: "#4285F4" }} />
                    &nbsp; Sign Up with Google
                  </button>
                </div>
              </form>
            </div>
            <div className="login-right">
              <p className="login-right-p">
                Already have an account?{" "}
                <Link to="/signin" className="primary" onClick={handleSignInClick}>
                  Sign In
                </Link>
              </p>
              <img src={logo} alt="Logo" className="login-right-logo" />
              <div className="login-right-option text-center">
                <p className="login-right-options">
                  By signing up, you agree to our Terms & conditions, Privacy policy
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>{
      showSignInModal &&
      <SignIn showSignIn={showSignInModal} handleClose={setShowSignInModal} />
}
    </>
  );
};

export default SignUp;
