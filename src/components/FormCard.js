import React from "react";
import styled from 'styled-components';



const DivCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 30%;
  height: auto;
  margin: 10px;
  text-align: center;
`;

const SWH2 = styled.h2`
  color: white;
  text-height: 15px;
  text-align: center;
`;

const SWli = styled.li`
  color: white;
  text-height: 15px;

`;

const SWimg = styled.img`
  width:50%;
  height: auto;
`;


export default function CharacterCard(props) {
  return (
    <DivCard>
      <SWH2>{props.cObject.name}</SWH2>
      <ul>
        <SWimg src={props.cObject.image} alt={props.cObject.name}></SWimg>
        <SWli>Species: {props.cObject.species}</SWli>
        <SWli>Status: {props.cObject.status}</SWli>
      </ul>
    </DivCard>
  )
}
