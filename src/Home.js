import React from "react";
import Category from "./Components/Category";
import Dasbord from "./Components/Dasbord";
import Header from "./Components/Header";
import ListGame from "./Components/ListGame";

const Home = () => {
  return (
    <div>
      <Header />
      <Dasbord />
      <Category />
      <ListGame />
    </div>
  );
};

export default Home;
