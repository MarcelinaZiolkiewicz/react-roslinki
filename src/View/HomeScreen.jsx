import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import SinglePlant from "../Components/SinglePlant";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  dispaly: flex;
  max-width: 95%;
  margin: 0 auto;
`;

const Info = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const HomeScreen = () => {
  const { plants } = useContext(AppContext);

  return (
    <Wrapper>
      <Box>
        {plants.length > 0 ? (
          plants.map((plant) => <SinglePlant key={plant.id} plant={plant} />)
        ) : (
          <Info>Brak roślin do wyświetlenia</Info>
        )}
      </Box>
    </Wrapper>
  );
};

export default HomeScreen;
