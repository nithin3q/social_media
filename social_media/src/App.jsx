import { useState } from "react";
// import './App.css'
import NavBar from "./components/pages/Navbar";
// index.js or App.js (or any other entry point)
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar2 from "./components/pages/Navbar2";
import Timeline from "./components/pages/Timeline";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <Routes>
          <Route exact path="/h" element={<NavBar />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
