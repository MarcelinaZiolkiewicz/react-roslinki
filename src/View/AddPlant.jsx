import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { AppContext } from "../Context/AppContext";

const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 40px;
  font-size: 1em;
`;

const Box = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin: 18px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 1.1em;
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #b8b8ff;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #9381ff;
  }
`;

const Error = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.2em;
  background-color: red;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0;
  display: block;
`;

const wateringOptions = [
  { value: "często", label: "Często" },
  { value: "średnio", label: "Średnio" },
  { value: "rzadko", label: "Rzadko" },
];

const categoryOptions = [
  { value: "trawy", label: "Trawy" },
  { value: "owoce", label: "Owoce" },
  { value: "kwiaty", label: "Kwiaty" },
];

const preferenceOptions = [
  { value: "słonecznie", label: "Słonecznie" },
  { value: "pół", label: "Pół na pół" },
  { value: "cień", label: "W cieniu" },
];

const AddPlant = () => {
  let { plantId } = useParams();
  const [plant, setPlant] = useState({
    name: "",
    id: uuidv4(),
    serialNum: "",
    img: "",
    description: "",
    category: { value: "", label: "" },
    preferences: { value: "", label: "" },
    watering: { value: "", label: "" },
  });
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { plants, AddItem, EditItem } = useContext(AppContext);

  useEffect(() => {
    if (plantId) {
      const index = plants.findIndex((item) => item.id === plantId);
      setPlant(plants[index]);
    }
  }, [plants, plantId]);

  useEffect(() => {
    if (
      plant.name.length === 0 ||
      plant.serialNum.length === 0 ||
      plant.img.length === 0 ||
      plant.description.length === 0 ||
      plant.category.value.length === 0 ||
      plant.preferences.value.length === 0 ||
      plant.watering.value.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [plant, plantId]);

  const renderMe = (item) => {
    if (location.pathname === "/plant/new" || item) return true;
  };

  return (
    <Box>
      {error && <Error>Uzupełnij wszystkie dane przed zatwierdzeniem</Error>}
      <h3>Dodaj rośline</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!error) {
            if (plantId) {
              EditItem(plant);
            } else {
              AddItem(plant);
            }
            navigate(`/`);
          }
        }}
      >
        <Input
          type="text"
          placeholder="Nazwa"
          value={plant.name}
          onChange={(e) => setPlant({ ...plant, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Numer katalogowy"
          value={plant.serialNum}
          onChange={(e) => setPlant({ ...plant, serialNum: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Opis - maks 200 znaków"
          value={plant.description}
          onChange={(e) => {
            if (e.target.value.length <= 200) {
              setPlant({ ...plant, description: e.target.value });
            }
          }}
        />
        <Input
          type="text"
          placeholder="Link do grafiki"
          value={plant.img}
          onChange={(e) => setPlant({ ...plant, img: e.target.value })}
        />
        {renderMe(plant.category.value) && (
          <Wrapper>
            <Select
              placeholder="Kategoria"
              defaultValue={plantId && plant.category}
              options={categoryOptions}
              onChange={(e) => {
                setPlant({
                  ...plant,
                  category: { value: e.value, label: e.label },
                });
              }}
            />
          </Wrapper>
        )}
        {renderMe(plant.preferences.value) && (
          <Wrapper>
            <Select
              placeholder="Preferencje"
              options={preferenceOptions}
              defaultValue={plantId && plant.preferences}
              onChange={(e) => {
                setPlant({
                  ...plant,
                  preferences: { value: e.value, label: e.label },
                });
              }}
            />
          </Wrapper>
        )}
        {renderMe(plant.watering.value) && (
          <Wrapper>
            <Select
              placeholder="Nawadnianie"
              options={wateringOptions}
              defaultValue={plantId && plant.watering}
              onChange={(e) => {
                setPlant({
                  ...plant,
                  watering: { value: e.value, label: e.label },
                });
              }}
            />
          </Wrapper>
        )}

        <Button type="submit">{plantId ? "Zapisz" : "Dodaj"}</Button>
      </form>
    </Box>
  );
};

export default AddPlant;
