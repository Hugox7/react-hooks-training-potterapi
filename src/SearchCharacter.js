import React, { useState } from "react";

const SearchCharacter = () => {

  const [value, setValue] = useState("");
  const [filteredCharacters] = useState([]);

  const handleCharacterChange = e => {
    setValue(e.target.value.trim());
  }

  return (
    <>
        <label for="name">Chercher un personnage :</label>
        <input onChange={handleCharacterChange} type="text" />
        <p>{value}</p>
    </>
  );
};

export default SearchCharacter;