import React from 'react';
import { theme } from '@root/theme';
import styled from 'styled-components';
import courtBg from '@images/nba_court.jpg';
import { ImageWrapper } from '@components/atoms/image-wrapper';
import { HeatZone } from '@components/molecules/heat-zone';

const heatzones = [
  { title: 'lane-left-1' },
  { title: 'lane-left-2' },
  { title: 'lane-left-3' },
  { title: 'free-throw' },
  { title: 'lane-right-1' },
  { title: 'lane-right-2' },
  { title: 'lane-right-3' },
];

type Props = {};

export const HeatMap = (type: Props) => {
  return (
    <StyledHeatMap>
      <div className='court-wrapper'>
        <ImageWrapper classname='court-bg' imgSrc={courtBg} />
        {heatzones.map((item, idx) => {
          return (
            <HeatZone
              key={idx}
              to={`/stats/${item.title}`}
              classname={item.title}
            />
          );
        })}
      </div>
    </StyledHeatMap>
  );
};

const StyledHeatMap = styled(`div`)`
  width: 100vw;
  display: flex;
  align-items: flex-start;

  .court-wrapper {
    position: relative;
  }

  .lane-left {
    &-1,
    &-2,
    &-3 {
      left: 31%;
    }
    @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
      left: 30%;
    }

    &-1 {
      top: 83.5%;

      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 83%;
      }
    }

    &-2 {
      top: 74.5%;
      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 74%;
      }
    }

    &-3 {
      top: 67.7%;
      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 67%;
      }
    }
  }

  .lane-right {
    &-1,
    &-2,
    &-3 {
      left: 67%;
    }

    &-1 {
      top: 83.5%;

      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 83%;
      }
    }

    &-2 {
      top: 74.5%;
      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 74%;
      }
    }

    &-3 {
      top: 67.7%;
      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 67%;
      }
    }
  }

  .free-throw {
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
  }

  .court-bg {
    height: 100vh;
    max-height: 100vh;
    position: relative;

    img {
      object-fit: contain;
      width: unset;
    }
  }
`;
