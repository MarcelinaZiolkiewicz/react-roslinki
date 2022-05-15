import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 80%;
  margin: 0 auto;
`;

const About = () => {
  return (
    <Wrapper>
      <h1>Informacje</h1>
      <h3>Aplikacje wykonali</h3>
      <ul>
        <li>Michał Ziółkiewicz</li>
        <li>Patryk Dominiak</li>
      </ul>
      <h3>Założenia</h3>
      <ul>
        <li>zarządzanie roślinami</li>
        <li>możliwość dodawania roślin</li>
        <li>możliwość edycji roślin</li>
        <li>możliwość usuwania roślin</li>
        <li>przechowywanie danych w localStorage</li>
        <li>
          rośliny powinny mieć swoje kategorie (kwiaty, drzewa owoce, trawy
          itp.)
        </li>
        <li>
          każda roślina powinna mieć: numer katalogowy, nazwa, obrazek, opis,
          nazwa kategorii, częstotliwość podlewania, preferencje rośliny
        </li>
      </ul>
    </Wrapper>
  );
};

export default About;
