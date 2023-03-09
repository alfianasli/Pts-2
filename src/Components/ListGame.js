import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tw-elements";

const ListGame = () => {
  const [listGames, setlistGame] = useState([]);

  const getCategoryGames = async () => {
    const res = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_HOST,
        },
      }
    );
    setlistGame(res.data);
    console.log(res.data.slice(0, 10));
  };

  useEffect(() => {
    getCategoryGames();
  }, []);

  return (
    <section id="menu">
      <div className="bg-menu h-full flex flex-col items-center p-32 max-lg:px-4">
        <div className="m-10 p-5  w-full h-full rounded-md flex flex-wrap justify-center gap-6">
          {listGames?.slice(0, 10).map((game) => (
            <div className=" w-1/4 bg-white h-auto rounded-md card-shadow max-lg:w-full">
              <img
                src={game.thumbnail}
                alt="gambar"
                className="object-cover rounded-t-md"
              />
              <div className="py-5 px-4">
                <h2 className=" font-medium truncate text-left ">
                  {game.title}
                </h2>
                <h4 className="text-xs  mt-1">{game.genre}</h4>

                <Link to={`/category/${game.id}`}>
                  <button
                    className="mt-10 flex"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalXl"
                    type="button"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListGame;
