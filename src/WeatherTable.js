import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadWeatherData } from "./redux/weatherSlice";

const stations = {
  Stockholm: "98210",
  Kiruna: "180940",
  Sturup: "53300",
};

const WeatherTable = ({ place }) => {
  const sortBy = useSelector((state) => state.weather.sortBy);

  const stationId = stations[place];
  let weatherUrl;
  const weatherData = useSelector((state) => state.weather.data);

  const dispatch = useDispatch();

  if (stationId) {
    weatherUrl = `https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/${stationId}/period/latest-months/data.json`;
  }

  const sortedWeatherData =
  sortBy === "temperature"
    ? sort(weatherData, "value", "asc")
    : sort(weatherData, "date", "desc");

  useEffect(() => {
    if (weatherUrl) {
      dispatch(loadWeatherData(weatherUrl));
    }
  }, [weatherUrl]);

  if (!stationId) {
    return (
      <p>
        <strong>Stationen hittades inte</strong>
      </p>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Temperatur</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {sortedWeatherData.map((dataPoint) => (
            <tr key={dataPoint.date}>
              <td>{dataPoint.value}</td>
              <td>{new Date(dataPoint.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

const sort = (weatherData, sortBy, sortOrder) => {
  return [...weatherData].sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    }

    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }

    return 0;
  });
};

export default WeatherTable;
