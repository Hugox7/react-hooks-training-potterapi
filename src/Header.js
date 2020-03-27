import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      
        <div>
            <nav>
                <ul style={{ listStyle: "none" }}>
                <li>
                    <Link to="/">Personnages</Link>
                </li>
                <li>
                    <Link to="/sorting-hat">Le Choipeau!</Link>
                </li>
                <li>
                    <Link to="/search-character">Chercher un personnage</Link>
                </li>
                </ul>
            </nav>
        </div>
    
  );
};

export default Header;