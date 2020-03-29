import React, { useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Character from './Character';

const SearchCharacter = () => {

  const API_KEY =
    "$2a$10$LX99qh/vioO8QBTTtrBuDOdfL6/OgwH7GsgQbhHGNnxF/SeGT7b8.";

  const [value, setValue] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);


  const handleCharacterChange = async (e) => {
    await setValue(e.target.value.trim());

    try {
      let res = await Axios.get(`https://www.potterapi.com/v1/characters?key=${API_KEY}`)
      const filteredRes = await res.data.filter(elem => elem.name.toLowerCase().indexOf(value) !== -1);
      await setFilteredCharacters(filteredRes);
      await console.log(value);
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <>
        <label htmlFor="name">Chercher un personnage :</label>
        <input onChange={handleCharacterChange} type="text" />
        <ul>
          {filteredCharacters.map(character => {
            return (
              <li><Link to={`character/${character._id}`}>{character.name}</Link></li>
            );
          })}
        </ul>
       
    </>
  );
};

export default SearchCharacter;