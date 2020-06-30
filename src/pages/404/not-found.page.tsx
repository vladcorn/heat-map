import React from 'react';
import styled from 'styled-components';
import { Button } from '@components/atoms/button';
import { Link } from 'react-router-dom';

type Props = {};

export const NotFound = (props: Props) => {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <Link to='/'>
        <Button color='primary' variant='contained'>
          Home
        </Button>
      </Link>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 5rem;
    margin-bottom: 20px;
  }
`;
