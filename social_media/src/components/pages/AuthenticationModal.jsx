import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const AuthenticationModal = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
    <div
                  className="options-boxs"
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "0",
                    backgroundColor: "white",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "0px 10px 0px 30px",
                    zIndex: "1",
                    borderRadius: "5px",
                    marginRight: "100px",
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"column",
                  }}
                >
                  <p  onClick={() => setShowSignIn(true)}>Sign In</p>
                  <p onClick={()=>setShowSignUp(true)}>Sign Up</p>
                </div>
      <SignIn showSignIn={showSignIn} handleClose={setShowSignIn} /> 
      <SignUp showSignUp={showSignUp} handleClose={setShowSignUp} />
    </>
  );
};


export default AuthenticationModal;
