import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [plants, setPlants] = useState([]);

  const AddItem = (item) => {
    setPlants([...plants, item]);
    saveToLocalStorage([...plants, item]);
  };

  const EditItem = (item) => {
    const newPlants = plants.map((plant) => {
      if (plant.id === item.id) {
        return item;
      }
      return plant;
    });
    setPlants(newPlants);
    saveToLocalStorage(newPlants);
  };

  const deleteItem = (id) => {
    setPlants(plants.filter((item) => item.id !== id));
    saveToLocalStorage(plants.filter((item) => item.id !== id));
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("plants", JSON.stringify(data));
  };

  const loadFromLocalStorage = () => {
    const loaded = JSON.parse(localStorage.getItem("plants"));
    if (loaded) {
      setPlants(loaded);
    } else {
      setPlants([]);
    }
  };

  const storeObject = {
    plants,
    AddItem,
    deleteItem,
    loadFromLocalStorage,
    EditItem,
  };

  return (
    <AppContext.Provider value={storeObject}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
