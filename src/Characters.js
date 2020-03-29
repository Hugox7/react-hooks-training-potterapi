import React, { useState, useEffect } from "react";
import Axios from "axios";

import DisplayCharacter from "./DisplayCharacter";
import Pagination from "./Pagination";

const Characters = () => {
  const API_KEY =
    "$2a$10$LX99qh/vioO8QBTTtrBuDOdfL6/OgwH7GsgQbhHGNnxF/SeGT7b8.";

  const [characters, setCharacters] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      let res = await Axios.get(`https://www.potterapi.com/v1/characters?key=${API_KEY}`);
      setCharacters(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterByHouse = async (e) => {
    //e.preventDefault();
    try {
        const res = await Axios
            .get(`https://www.potterapi.com/v1/characters?key=${API_KEY}&house=${e.target.value}`);
        setCharacters(res.data);
    } catch (err) {
        console.log(err);
    }
    setCurrentPage(1);
  };

  const previousPage = () => {
    return setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    return setCurrentPage(currentPage + 1);
  };

  const handleListClick = e => {
    e.preventDefault();
    return (setItemsPerPage(parseInt(e.target.value, 10)), setCurrentPage(1));
  };

  const items = currentItems.map((item, index) => {
    return <DisplayCharacter character={item} key={index} />;
  });

  if (!characters.length) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <select onChange={filterByHouse}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
        <button onClick={getCharacters}>get all</button>
        <label htmlFor="pages">Items par page: </label>
        <select onClick={handleListClick} id="pages">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
        {items}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={characters.length}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    );
  }
};

export default Characters;