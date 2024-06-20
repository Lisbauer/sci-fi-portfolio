import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="navigator">
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">Projects</a>
          <a href="">Skills</a>
          <a href="">Certificates</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
