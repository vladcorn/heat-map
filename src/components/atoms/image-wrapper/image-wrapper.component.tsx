import React from 'react';
import styled from 'styled-components';

type Props = {
  imgSrc: string;
  classname?: string;
};

export const ImageWrapper = ({ imgSrc, classname }: Props) => {
  return (
    <StyledImageWrapper className={classname}>
      <img src={imgSrc} alt='' />
    </StyledImageWrapper>
  );
};

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;
