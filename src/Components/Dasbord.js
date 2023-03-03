import React from "react";
import "../App.css";
import videoBg from "../Asset/videoBg.mp4";

const Dasbord = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1 className="text-8xl">Welcome</h1>
          <p>to THE PORTAL GAME</p>
        </div>
      </div>
    </>
  );
};

export default Dasbord;
