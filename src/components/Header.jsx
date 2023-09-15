import React from "react";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">EasyBuy</h1>
      </div>
      <div>
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
};
