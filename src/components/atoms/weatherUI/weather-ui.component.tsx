import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeatherFromGeolocation } from '@root/api';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '@components/atoms/weatherUI/actions';

type WeatherUIProps = {};

export const WeatherUI = (props: WeatherUIProps) => {
  const weatherState = useSelector((store) => store.weather);
  const { weather, weatherLoaded, weatherLoadedAt } = weatherState;
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !weatherLoaded ||
      new Date() - new Date(weatherLoadedAt) > 30 * 60 * 1000
    ) {
      dispatch(getWeather());
    }
  }, []);

  return (
    <StyledWeatherUI>
      {weather && weather.main ? (
        <>
          <p>{weather.main.temp} °C</p>
          <p>{weather.main.pressure}</p>
          <p>{weather.main.humidity} %</p>
        </>
      ) : (
        <CircularProgress color='secondary' />
      )}
    </StyledWeatherUI>
  );
};

const StyledWeatherUI = styled.div``;
