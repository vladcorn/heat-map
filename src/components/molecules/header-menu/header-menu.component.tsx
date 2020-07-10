import React, { useEffect } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type HeaderMenuProps = {
  isVisible: boolean;
  onClick: () => void;
};

export const HeaderMenu = ({ isVisible, onClick }: HeaderMenuProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('blocked');
    } else {
      document.body.classList.remove('blocked');
    }
  }, [isVisible]);
  return (
    <StyledHeaderMenu className={cn({ 'header-menu-open': isVisible })}>
      <div className='link-wrapper' onClick={() => onClick()}>
        <Link to={'/heat-map'}>Heat Map</Link>
      </div>
      <div className='link-wrapper' onClick={() => onClick()}>
        <Link to={'/create-training'}>Create Training</Link>
      </div>
      <div className='link-wrapper' onClick={() => onClick()}>
        <Link to={'/stats'}>Stats</Link>
      </div>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled(`div`)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  z-index: ${(p) => p.theme.zIndex.speedDial};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
  background-color: ${(p) => p.theme.palette.common.white};
  transform: translateY(-100%);
  transition: transform ${(p) => p.theme.transitions.easing.easeInOut}
    ${(p) => p.theme.transitions.duration.standard}ms;
  padding: 20px;

  &.header-menu-open {
    transform: translateY(70px);
  }

  .link-wrapper {
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;
