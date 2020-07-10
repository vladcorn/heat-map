import React from 'react';
import { theme } from '@root/theme';
import styled from 'styled-components';
import courtBg from '@images/nba_court.jpg';
import { ImageWrapper } from '@components/atoms/image-wrapper';
import { HeatZone } from '@components/molecules/heat-zone';

const heatzonesMOCK = [
  { title: 'lane-left-1', successShot: 30, total: 40 },
  { title: 'lane-left-2', successShot: 15, total: 55 },
  { title: 'lane-left-3', successShot: 3, total: 40 },
  { title: 'lane-left-1-backboard', successShot: 30, total: 40 },
  { title: 'lane-left-2-backboard', successShot: 15, total: 55 },
  { title: 'lane-left-3-backboard', successShot: 3, total: 40 },
  { title: 'free-throw', successShot: 123, total: 320 },
  { title: 'lane-right-1', successShot: 30, total: 30 },
  { title: 'lane-right-2', successShot: 192, total: 200 },
  { title: 'lane-right-3' },
  { title: 'lane-right-1-backboard', successShot: 30, total: 30 },
  { title: 'lane-right-2-backboard', successShot: 192, total: 200 },
  { title: 'lane-right-3-backboard' },
];

type Props = {
  isTraining?: boolean;
  heatzones?: [
    {
      title: string;
      successShot?: number;
      total?: number;
    }
  ];
};

export const HeatMap = ({ isTraining, heatzones = heatzonesMOCK }: Props) => {
  return (
    <StyledHeatMap>
      <div className='court-wrapper'>
        <ImageWrapper classname='court-bg' imgSrc={courtBg} />
        {heatzones.map((item, idx) => {
          return (
            <HeatZone
              title={item.title}
              isTraining={isTraining}
              key={idx}
              to={`/stats/${item.title}`}
              classname={item.title}
              {...item}
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

      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        left: 30%;
      }
    }
    &-1-backboard,
    &-2-backboard,
    &-3-backboard {
      left: calc(31% - 23px);

      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        left: calc(30% - 23px);
      }
    }

    &-1,
    &-1-backboard {
      top: 83.5%;

      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 83%;
      }
    }

    &-2,
    &-2-backboard {
      top: 74.5%;
      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 74%;
      }
    }

    &-3,
    &-3-backboard {
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
    &-1-backboard,
    &-2-backboard,
    &-3-backboard {
      left: calc(67% + 23px);
    }

    &-1,
    &-1-backboard {
      top: 83.5%;

      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 83%;
      }
    }

    &-2,
    &-2-backboard {
      top: 74.5%;
      @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
        top: 74%;
      }
    }

    &-3,
    &-3-backboard {
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
