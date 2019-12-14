import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  flex-wrap: wrap;
`;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("The error is: ", error);
      });
  }, []);

  return (
    <section className="character-list">
      <DivFlex>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </DivFlex>
    </section>
  );
};

export default CharacterList;
