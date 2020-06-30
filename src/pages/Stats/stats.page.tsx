import React from 'react';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';

type Props = {
  route?: object;
};

export const Stats = ({ route, ...props }: Props) => {
  return <StyledStats>{renderRoutes(route.routes)}</StyledStats>;
};

const StyledStats = styled.div``;
