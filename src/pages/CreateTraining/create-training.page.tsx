import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeatMap } from '@pages/Heatmap';
import { getTraining, postTraining } from '@root/api';

type CreateTrainingPageProps = {};

export const CreateTraining = (props: CreateTrainingPageProps) => {
  const [training, setTraining] = useState({ date: new Date().getTime() });
  useEffect(() => {
    getTraining().then((r) => console.log(r));
    // postTraining(training).then((r) => console.log(r));
  }, []);
  return (
    <StyledCreateTraining>
      <HeatMap isTraining={true} />
    </StyledCreateTraining>
  );
};

const StyledCreateTraining = styled('div')``;
