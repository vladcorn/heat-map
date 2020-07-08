import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { Tooltip } from '@components/atoms/tooltip';
import { Typography, TextField } from '@material-ui/core';
import { Button } from '@components/atoms/button';

type Props = {
  title?: string;
  classname?: string;
  to: string;
  successShot?: number;
  total?: number;
  isTraining?: boolean;
};

type TooltipInfoProps = {
  successShot?: number;
  total?: number;
};

type TooltipFormProps = {
  title?: string;
};

const TooltipForm = ({ title }: TooltipFormProps) => {
  const [stateForm, setStateForm] = useState({
    id: title,
    success: 0,
    total: 0,
  });
  return (
    <StyledTooltipForm>
      <Typography component={'h4'} variant={'subtitle2'}>
        {title.split('-').join(' ')}
      </Typography>
      <div className='form-wrapper'>
        <TextField
          className={'input-wrapper'}
          label={'Success Shots'}
          value={stateForm.success}
          type='number'
          title={'Success shots'}
          onChange={(e) =>
            setStateForm({ ...stateForm, success: e.target.value })
          }
        />
        <TextField
          className={'input-wrapper'}
          label={'Total'}
          type='number'
          value={
            stateForm.total <= stateForm.success
              ? stateForm.success
              : stateForm.total
          }
          onChange={(e) =>
            setStateForm({ ...stateForm, total: e.target.value })
          }
        />
        <Button variant={'contained'} color={'primary'}>
          Send
        </Button>
      </div>
    </StyledTooltipForm>
  );
};

const StyledTooltipForm = styled('form')`
  display: flex;
  flex-direction: column;

  .input-wrapper {
    margin-right: 10px;
  }

  h4 {
    text-transform: capitalize;
  }

  .form-wrapper {
    display: flex;

    button {
      width: 100%;
    }
  }
`;

const TootlipInfo = ({ successShot = 0, total = 0 }: TooltipInfoProps) => {
  return (
    <StyledTooltipInfo>
      <div className='info-stat'>
        <Typography variant={'subtitle2'} component={'h3'} noWrap>
          Suc. Shot %
        </Typography>
        <Typography
          className={cn({
            bad:
              (successShot / total) * 100 <= 35 &&
              (successShot / total) * 100 != 0,
            normal:
              (successShot / total) * 100 > 35 &&
              (successShot / total) * 100 <= 80,
            perfect: (successShot / total) * 100 > 80,
          })}
        >
          {isNaN((successShot / total) * 100)
            ? 0
            : ((successShot / total) * 100).toFixed(2)}
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
          Total
        </Typography>
        <Typography>{total}</Typography>
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

export const HeatZone = ({
  title,
  classname,
  to,
  successShot,
  total,
  isTraining,
}: Props) => {
  return (
    <Tooltip
      title={
        isTraining ? (
          <TooltipForm title={title} />
        ) : (
          <TootlipInfo successShot={successShot} total={total} />
        )
      }
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
