import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NoImage from "../Img/pobrane.jpg";
import { AppContext } from "../Context/AppContext";

const Description = styled.p`
  font-size: 0.9em;
  margin: 0 0 0 10px;
  padding: 0;
  max-width: 180px;
  overflow: hidden;
  align-self: flex-start;
`;

const Wrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 550px;
  background-color: #f8f7ff;
  padding: 5px 5px 10px 5px;
  margin: 10px;
  box-shadow: 2px 2px 10px #b8b8ff;
  font-family: "Montserrat", sans-serif;
`;

const Image = styled.img`
  margin: 10px;
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1.3em;
  margin: 0 0 0 10px;
  padding: 0;
  align-self: flex-start;
`;

const ListItem = styled.li`
  font-size: 0.9em;
  list-style: none;
  text-transform: capitalize;
  align-self: flex-start;
`;

const ListWrapper = styled.ul`
  margin: 10px 0 0 15px;
  padding: 0;
  align-self: flex-start;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #b8b8ff;
  width: 45%;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #9381ff;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5px;
`;

const Serial = styled.p`
  font-size: 0.8em;
  margin: 0 0 0 10px;
  font-weight: bold;
  padding: 5px 0 5px 0;
`;

const SinglePlant = ({ plant }) => {
  const {
    name,
    id,
    serialNum,
    description,
    category,
    preferences,
    watering,
    img,
  } = plant;

  const navigate = useNavigate();
  const { deleteItem } = useContext(AppContext);

  return (
    <Wrapper>
      <Image src={img.length > 7 ? img : NoImage} alt="image" />
      <Title>{name}</Title>
      <Serial>Nr. katalogowy: {serialNum}</Serial>
      <Description>{description}</Description>
      <ListWrapper>
        <ListItem>- {category.label}</ListItem>
        <ListItem>- {preferences.label}</ListItem>
        <ListItem>- {watering.label}</ListItem>
      </ListWrapper>
      <Buttons>
        <Button
          onClick={() => {
            navigate(`/plant/${id}`);
          }}
        >
          Edytuj
        </Button>
        <Button
          onClick={() => {
            deleteItem(id);
          }}
        >
          Usuń
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default SinglePlant;
