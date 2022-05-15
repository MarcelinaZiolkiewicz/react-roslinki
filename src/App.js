import { Route, Routes, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import React, { useContext, useEffect } from "react";

import { AppContext } from "./Context/AppContext";

import AddPlant from "./View/AddPlant";
import HomeScreen from "./View/HomeScreen";
import About from "./View/About";

const ImprovedLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.1em;
  padding: 14px 20px;
  margin: 8px 20px 8px 0;
  text-decoration: none;
  text-align: center;
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

function App() {
  const location = useLocation();
  const { loadFromLocalStorage } = useContext(AppContext);

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  return (
    <Box>
      <h2>Rośliny ogrodów Lórien</h2>

      <Box style={{ flexDirection: "row" }}>
        {location.pathname === "/" ? (
          <ImprovedLink to="/plant/new">Dodaj roślinę</ImprovedLink>
        ) : (
          <ImprovedLink to="/">Strona główna</ImprovedLink>
        )}
        {location.pathname === "/about" && (
          <ImprovedLink to="/plant/new">Dodaj roślinę</ImprovedLink>
        )}
        <ImprovedLink to="/about">Informacje</ImprovedLink>
      </Box>
      <main style={{ width: "100%" }}>
        <Routes>
          <Route path="plant/new" element={<AddPlant />} />\
          <Route path="plant" element={<AddPlant />}>
            <Route path=":plantId" element={<AddPlant />} />
          </Route>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Box>
  );
}

export default App;
