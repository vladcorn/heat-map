import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeatherFromGeolocation } from '@root/api';

type WeatherUIProps = {};

export const WeatherUI = (props: WeatherUIProps) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        getWeatherFromGeolocation(
          pos.coords.latitude,
          pos.coords.longitude
        ).then((data) => setWeather(data));
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <StyledWeatherUI>
      {weather && weather.main ? (
        <>
          <p>{weather.main.temp} °C</p>
          <p>{weather.main.pressure}</p>
          <p>{weather.main.humidity} %</p>
        </>
      ) : null}
    </StyledWeatherUI>
  );
};

const StyledWeatherUI = styled.div``;
