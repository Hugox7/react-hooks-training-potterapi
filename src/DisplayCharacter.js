import React from "react";
import "./displayCharacter.css";

const DisplayCharacter = ({ character }) => {
  return <div id="card">{character.name}</div>;
};

export default DisplayCharacter;