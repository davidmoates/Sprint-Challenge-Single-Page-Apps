import React from "react";
import styled from "styled-components";

const DivCard = styled.div`
  background: rgba(50, 205, 50, 0.8);
  width: 30%;
  height: auto;
  margin: 10px;
  text-align: center;
`;

const H2 = styled.h2`
  color: white;
  text-height: 15px;
  text-align: center;
`;

const Li = styled.li`
  color: white;
  text-height: 15px;
`;

const Img = styled.img`
  width: 50%;
  height: auto;
`;

const CharacterCard = props => {
  return (
    <DivCard>
      <H2>{props.character.name}</H2>
      <ul>
        <a href={props.character.url}>
          <Img src={props.character.image} alt={props.character.name} />
        </a>
        <Li>Gender: {props.character.gender}</Li>
        <Li>Species: {props.character.species}</Li>
        <Li>Alive, Dead, or Unknown: {props.character.status}</Li>
      </ul>
    </DivCard>
  );
};

export default CharacterCard;
