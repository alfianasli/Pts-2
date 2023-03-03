import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="w-full fixed">
      <header className="flex py-5 px-10 my-5 mx-20 text-white rounded-full backdrop-blur-sm">
        <div className="logo">
          <h2>Logo</h2>
        </div>

        <nav className="ml-auto">
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Menu</li>
            <li>List Games</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
