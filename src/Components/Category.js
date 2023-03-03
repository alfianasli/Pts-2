import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Category = () => {
  return (
    <section id="category" className="px-16 py-5">
      <h2 className="text-white font-semibold text-4xl">Category Games</h2>

      <div className="flex flex-wrap justify-between py-8 gap-7">
        <Link to={"/category/mmoprg"}>
          <div className="w-80 h-20 bg-cat1 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">MMORPG</h2>
          </div>
        </Link>
        <Link to={"/category/sport"}>
          <div className="w-80 h-20 bg-cat2 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Sports</h2>
          </div>
        </Link>
        <Link to={"/category/strategy"}>
          <div className="w-80 h-20 bg-cat3 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Strategy</h2>
          </div>
        </Link>
        <Link to={"/category/sandbox"}>
          <div className="w-80 h-20 bg-cat4 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Sandbox</h2>
          </div>
        </Link>
        <Link to={"/category/horror"}>
          <div className="w-80 h-20 bg-cat5 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Horror</h2>
          </div>
        </Link>
        <Link to={"/category/shooter"}>
          <div className="w-80 h-20 bg-cat6 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Shooter</h2>
          </div>
        </Link>
        <Link to={"/category/zombie"}>
          <div className="w-80 h-20 bg-cat7 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Zombie</h2>
          </div>
        </Link>
        <Link to={"/category/anime"}>
          <div className="w-80 h-20 bg-cat8 rounded-lg flex justify-center items-center">
            <h2 className="text-white font-bold texxl">Anime</h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Category;
