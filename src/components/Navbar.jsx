import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/signup">SignUp</Link>
      <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/calculator">Calculator</Link>
    </nav>
  );
};

export default Navbar;
