import React from 'react';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

type Props = {};

export const SingleStat = (props: Props) => {
  console.log(props);
  return <StyledSingleStat></StyledSingleStat>;
};

const StyledSingleStat = styled.div``;
