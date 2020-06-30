import React from 'react';
import { theme } from '@root/theme';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Link } from 'react-router-dom';
import { Tooltip } from '@components/atoms/tooltip';

type Props = { classname?: string; to: string };

const TootlipInfo = () => {
  return <div>HERE WILL BE SHORT INFO</div>;
};

export const HeatZone = ({ classname, to }: Props) => {
  return (
    <Tooltip title={<TootlipInfo />} interactive>
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
