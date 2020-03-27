import React, { useState } from "react";
import Axios from "axios";

const SortingHat = () => {
  const API_KEY =
    "$2a$10$LX99qh/vioO8QBTTtrBuDOdfL6/OgwH7GsgQbhHGNnxF/SeGT7b8.";

  const [randomHouse, setRandomHouse] = useState("");

  const getRandomHouse = async e => {
    e.preventDefault();
    try {
      let res = await Axios.get(
        `https://www.potterapi.com/v1/sortingHat?key=${API_KEY}`
      );
      setRandomHouse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const currentHouse = randomHouse === "" ? "?" : randomHouse;

  return (
    <div>
      <h2>The sorting Hat</h2>
      <p>Cliquez sur le choipeau pour découvrir votre maison.</p>
      <br />
      <button onClick={getRandomHouse}>Cliquez sur le Choipeau</button>
      <p>{currentHouse}</p>
    </div>
  );
};

export default SortingHat;