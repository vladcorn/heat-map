import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { Tooltip } from '@components/atoms/tooltip';
import { Typography } from '@material-ui/core';

type Props = {
  classname?: string;
  to: string;
  successShot?: number;
  allTime?: number;
};
type TooltipInfoProps = {
  successShot?: number;
  allTime?: number;
};

const TootlipInfo = ({ successShot = 0, allTime = 0 }: TooltipInfoProps) => {
  return (
    <StyledTooltipInfo>
      <div className='info-stat'>
        <Typography variant={'subtitle2'} component={'h3'} noWrap>
          Suc. Shot %
        </Typography>
        <Typography
          className={cn({
            bad:
              (successShot / allTime) * 100 <= 35 &&
              (successShot / allTime) * 100 != 0,
            normal:
              (successShot / allTime) * 100 > 35 &&
              (successShot / allTime) * 100 <= 80,
            perfect: (successShot / allTime) * 100 > 80,
          })}
        >
          {isNaN((successShot / allTime) * 100)
            ? 0
            : ((successShot / allTime) * 100).toFixed(2)}
          %
        </Typography>
      </div>
      <div className='info-stat'>
        <Typography variant={'subtitle2'} component={'h3'} noWrap>
          Suc. Shot
        </Typography>
        <Typography>{successShot}</Typography>
      </div>
      <div className='info-stat'>
        <Typography variant={'subtitle2'} component={'h3'} noWrap>
          All Time
        </Typography>
        <Typography>{allTime}</Typography>
      </div>
    </StyledTooltipInfo>
  );
};
const StyledTooltipInfo = styled(`div`)`
  display: flex;
  flex-direction: row;

  .info-stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }

    p {
      font-weight: 700;
      color: ${(p) => p.theme.palette.secondary.main};
      &.bad {
        color: ${(p) => p.theme.palette.error.main};
      }
      &.normal {
        color: ${(p) => p.theme.palette.warning.main};
      }
      &.perfect {
        color: ${(p) => p.theme.palette.success.main};
      }
    }
  }
`;

export const HeatZone = ({ classname, to, successShot, allTime }: Props) => {
  return (
    <Tooltip
      title={<TootlipInfo successShot={successShot} allTime={allTime} />}
      interactive
      arrow={true}
    >
      <StyledHeatZone to={to} className={classname} />
    </Tooltip>
  );
};

const StyledHeatZone = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: ${(p) => rgba(p.theme.palette.common.black, 0.5)};
  border-radius: 50%;
  transition: background-color ${(p) => p.theme.transitions.easing.easeIn}
    ${(p) => p.theme.transitions.duration.shorter}ms;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => rgba(p.theme.palette.common.black, 1)};
  }
`;
