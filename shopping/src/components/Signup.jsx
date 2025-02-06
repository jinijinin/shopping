import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <body>
      <header className="header">
        <div className="HeadContainer">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        </div>
      </header>
      <h2>회원가입</h2>
      <form id="SignupContainer" onSubmit={HandleSubmit} className="SignupForm">
        <div className="SignGroup">
          <label htmlFor="SignupEmail">Email: </label>
          <input
            type="email"
            id="SignupEmail"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </div>

        <div className="SignGroup">
          <label htmlFor="SignupPassword">Password: </label>
          <input type="password" id="SignupPassword" name="password" required />
        </div>

        <div className="SignupAction">
          <button type="submit">Sign up</button>
        </div>
      </form>
      </body>
    </div>
  );
};

export default Signup;
