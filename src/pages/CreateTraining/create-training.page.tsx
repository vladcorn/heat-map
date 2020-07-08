import React from 'react';
import styled from 'styled-components';
import { HeatMap } from '@pages/Heatmap';

type CreateTrainingPageProps = {};

export const CreateTraining = (props: CreateTrainingPageProps) => {
  return (
    <StyledCreateTraining>
      <HeatMap isTraining={true} />
    </StyledCreateTraining>
  );
};

const StyledCreateTraining = styled('div')``;
