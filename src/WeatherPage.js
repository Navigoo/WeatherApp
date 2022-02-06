import React from "react";
import { useState } from "react";
import WeatherTable from "./WeatherTable";
import Sidebar from "./Sidebar";
import HamburgerButton from "./HamburgerButton";
import SortButtons from "./SortButtons";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const WeatherPage = () => {
  const [sortBy, setSortBy] = useState("temperature");
  
  const params = useParams();

  const showSidebar = useSelector(state => state.app.isSidebarOpen);

  const StyledH1 = styled.h1`
    background-color: yellow;
    ${props => props.lineUnder ? `text-decoration: underline` : ``}
  `;

  return (
    <div>
      <Sidebar visible={showSidebar} />
      <HamburgerButton />

      <StyledH1 lineUnder={false}>Temperaturen i {params.place}</StyledH1>

      <SortButtons/>
      <WeatherTable place={params.place}></WeatherTable>
    </div>
  );
};

export default WeatherPage;
