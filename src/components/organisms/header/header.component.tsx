import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/quarks/icon';
import { Link } from 'react-router-dom';
import { Hamburger } from '@components/atoms/hamburger/hamburger.conmponent';
import { HeaderMenu } from '@components/molecules/header-menu';
import { WeatherUI } from '@components/atoms/weatherUI';

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const [isVisible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <StyledHeader>
        <div className='logo-wrapper' onClick={() => setVisible(false)}>
          <Link to='/'>
            <Icon variant='logo' />
          </Link>
        </div>
        <WeatherUI className={'header-weather'} />
        <div className='hamburger-wrapper'>
          <Hamburger toggleMenu={toggleMenu} isVisible={isVisible} />
        </div>
      </StyledHeader>
      <HeaderMenu isVisible={isVisible} onClick={toggleMenu} />
    </>
  );
};

const StyledHeader = styled('div')`
  position: fixed;
  top: 0;
  z-index: ${(p) => p.theme.zIndex.appBar};
  display: flex;
  align-items: center;
  width: 100vw;
  height: 70px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  background-color: ${(p) => p.theme.palette.common.white};

  .hamburger-wrapper {
    margin-left: auto;
    width: 50px;
  }

  .header-weather {
    margin-left: 20px;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 100%;
    background-color: ${(p) => p.theme.palette.primary.main};
  }
`;
