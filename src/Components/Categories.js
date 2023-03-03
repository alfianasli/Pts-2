import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../index.css";
import { Helmet } from "react-helmet";
import { ProgressBar } from "react-loader-spinner";
import Detail from "./Detail";

const Categories = () => {
  const { game } = useParams();

  const [loading, setLoading] = useState(true);

  const getCategoryGames = async () => {
    const res = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        params: { category: `${game}` },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_HOST,
        },
      }
    );
    console.log(res.data.slice(0, 10));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    getCategoryGames();
  }, []);

  return (
    <>
      <Helmet>
        <title>sambo brembo</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {loading ? (
        <>
          <div className="flex flex-col h-screen justify-center items-center">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#F4442E"
              barColor="#51E5FF"
            />
          </div>
        </>
      ) : (
        <>
          <Header />
          <Detail />
        </>
      )}
    </>
  );
};

export default Categories;
