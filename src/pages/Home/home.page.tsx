import React from 'react';
import { NavLink } from 'react-router-dom';
import { WeatherUI } from '@components/atoms/weatherUI';
import { Typography } from '@material-ui/core';
type Props = {};

export const Home = (props: Props) => {
  return (
    <>
      <Typography color='textPrimary' component={'h1'} variant={'h1'}>
        HOME PAGE
      </Typography>
    </>
  );
};
