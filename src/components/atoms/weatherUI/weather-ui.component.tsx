import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeatherFromGeolocation } from '@root/api';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '@components/atoms/weatherUI/actions';

type WeatherUIProps = {
  className?: string;
};

export const WeatherUI = ({ className }: WeatherUIProps) => {
  const weatherState = useSelector((store) => store.weather);
  const { weatherData, weatherLoaded, weatherLoadedAt } = weatherState;
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
    <StyledWeatherUI className={className}>
      {weatherData && weatherData.main ? (
        <>
          <p>{weatherData.main.temp} °C</p>
          <p>{weatherData.main.pressure}</p>
          <p>{weatherData.main.humidity} %</p>
        </>
      ) : (
        <CircularProgress color='secondary' />
      )}
    </StyledWeatherUI>
  );
};

const StyledWeatherUI = styled.div``;
