import React from 'react';
import { NavLink } from 'react-router-dom';
type Props = {};

export const Home = (props: Props) => {
  return <NavLink to='/heat-map'>Heat map</NavLink>;
};
