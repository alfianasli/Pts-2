import React from "react";
import Category from "./Components/Category";
import Dasbord from "./Components/Dasbord";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ListGame from "./Components/ListGame";

const Home = () => {
  return (
    <div>
      <Header />
      <Dasbord />
      <Category />
      <ListGame />
      <Footer />
    </div>
  );
};

export default Home;
