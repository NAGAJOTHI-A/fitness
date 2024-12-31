import React from "react";
import "./Login.css";
import { BrowserRouter, Link } from "react-router-dom";

 const Login = () => {
  return (
    <div className="login-container">
      <div className="content-wrapper">
        <div className="login-left">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/450/931/original/happy-woman-running-in-the-park-vector-illustration-in-flat-style-concept-illustration-for-healthy-lifestyle-sport-exercising.jpg"
            alt="Fitness Tracker Illustration"
            className="illustration"
          />
        </div>
        <div className="login-right">
          <div className="logo">
            <img
              src="data:image/png;base64,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"
              alt="Crystal Delta Logo"
              className="logo-image"
            />
          </div>
          <h2>Welcome Back!</h2>
          <form className="login-form">
            <input type="text" id="username" placeholder="Username" />
            <input type="password" id="password" placeholder="Password" />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p className="register-link">
            Don’t have an account? <Link to="/register"><button>Register</button></Link>
          </p>
        </div>
      </div>
    </div>
  );
};export default Login;