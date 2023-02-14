import React from "react";
import Destination from "../components/destination/Destination";
import Navbar from "../components/navbar/Navbar";
import "./homepage.scss";
import Data from "../assets/data/Data";

function Homepage() {
  const cards = Data.map((item) => {
    return <Destination {...item} />;
  });
  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
}

export default Homepage;
