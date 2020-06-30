import React from 'react';
import styled from 'styled-components';

type Props = {
  match: {
    params: { id: string };
  };
};

export const SingleStat = ({ match }: Props) => {
  return (
    <StyledSingleStat>
      <h1>{match.params.id.split('-').join(' ')}</h1>
    </StyledSingleStat>
  );
};

const StyledSingleStat = styled('div')`
  h1 {
    text-transform: capitalize;
  }
`;
