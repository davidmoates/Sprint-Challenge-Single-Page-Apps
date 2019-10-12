import React, { useEffect, useState } from "react";
import axios from 'axios';

import styled from 'styled-components';


import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  flex-wrap: wrap;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charRM, setCharRM] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res.data.results);
      setCharRM(res.data.results);

    })
    .catch(error => {
      console.log("Error:", error);
    })
  },[])

  return (
  <DivFlex>
    {charRM.map((char, index) => <SearchForm key = {index} cObject = {char}/>)}
    {charRM.map((char, index) => <CharacterCard key = {index} cObject = {char}/>)}
  </DivFlex>
  );
}
