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
        setCharacters(response.data.results);
      })
      .catch(error => {
        return <p>The error is: {error}</p>;
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {}, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCharacters(results);
  };

  return (
    <section className="character-list">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <DivFlex>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </DivFlex>
    </section>
  );
};

export default CharacterList;
