import React from 'react';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';

type Props = {
  route: { routes: [] };
};

export const Stats = ({ route }: Props) => {
  const { routes } = route;
  return <StyledStats>{renderRoutes(routes)}</StyledStats>;
};

const StyledStats = styled.div``;
