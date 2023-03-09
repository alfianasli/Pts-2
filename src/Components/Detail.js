import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import Footer from "./Footer";

const Detail = () => {
  const { game } = useParams();
  const [games, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  const getCategoryGames = async () => {
    const res = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_HOST,
        },
        params: {
          id: game,
        },
      }
    );

    setGame(res.data);
    console.log(res.data.slice);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    getCategoryGames();
  });

  return (
    <>
      <Helmet>
        <title>{`${games.title}`}</title>
        <meta name="description" content="detail game" />
      </Helmet>
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <ReactLoading
              type="bars"
              color="red"
              width={64}
              height={64}
            ></ReactLoading>
          </div>
        </>
      ) : (
        <>
          <Header />
          <section className="flex p-32 max-lg:flex-col max-lg:p-4">
            <div
              className="w-1/2 flex justify-center max-lg:w-full"
              // data-aos="fade-up-left"
              // data-aos-delay="500"
            >
              <img
                src={games.thumbnail}
                alt="gambar orang"
                className="w-5/6 object-cover"
              />
            </div>
            <div
              className="w-1/2 flex flex-col items-center max-lg:w-full "
              // data-aos="fade-up-right"
              // data-aos-delay="500"
            >
              <h2 className=" max-lg:text-6xl max-lg">{games.title}</h2>
              <h4 className="sub-title z-10 max-lg:text-xl max-lg:mt-1 max-lg:">
                {games.release_date}
              </h4>

              <p className="text-center text-black text-sm px-16 leading-relaxed">
                {games.description}
              </p>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Detail;
