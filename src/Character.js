import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Character = (props) => {

    const API_KEY =
    "$2a$10$LX99qh/vioO8QBTTtrBuDOdfL6/OgwH7GsgQbhHGNnxF/SeGT7b8.";

   const [character, setCharacter] = useState({})

    useEffect(
        () => {
            getCharacter();
        }, []
    );

    const getCharacter = async () => {
        let res = await axios.get(`https://www.potterapi.com/v1/characters/${props.match.params.id}?key=${API_KEY}`)
        setCharacter(res.data);
        console.log(props);
    }

    const goBack = () => {
        return props.history.goBack();
    }

    if (Object.entries(character).length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <p>{character.name}</p>
            <p>Ecole : {character.school}</p>
            <p>Maison : {character.house}</p>
            <p>Role : {character.role}</p>
            <p>Ordre du Phoenix : {character.orderOfThePhoenix === true ? 'Oui' : 'Non'}</p>
            <button onClick={goBack}>Go back</button>
        </>
        
    )
}

export default Character;