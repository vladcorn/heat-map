import React from 'react';
import styled from 'styled-components';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

type Props = {
  match: {
    params: { id: string };
  };
};

type TableSingleStatProps = {
  date: string;
  sucShot: number;
  allTime: number;
};

function createData(
  date: string,
  sucShot: number,
  allTime: number
): TableSingleStatProps {
  return { date, sucShot, allTime };
}

const mockData = [
  createData(new Date(), 30, 30),
  createData(new Date(), 22, 45),
  createData(new Date(), 31, 33),
  createData(new Date(), 45, 266),
  createData(new Date(), 1213, 2123),
];

const TabeleSingleStat = () => {
  return (
    <Paper className={'table-single-stat'} elevation={5}>
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='right'>Success Shot (%)</TableCell>
              <TableCell align='right'>Success Shot</TableCell>
              <TableCell align='right'>All time shots</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((row) => (
              <TableRow key={row.date}>
                <TableCell component='th' scope='row'>
                  {new Date(row.date).toLocaleDateString()}
                </TableCell>
                <TableCell align='center'>
                  {((row.sucShot / row.allTime) * 100).toFixed(2)} %
                </TableCell>
                <TableCell align='center'>{row.sucShot}</TableCell>
                <TableCell align='center'>{row.allTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const SingleStat = ({ match }: Props) => {
  return (
    <StyledSingleStat>
      <h1>{match.params.id.split('-').join(' ')}</h1>
      <TabeleSingleStat />
    </StyledSingleStat>
  );
};

const StyledSingleStat = styled('div')`
  width: 100vw;
  padding: 20px;

  h1 {
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  .table-single-stat {
    max-width: 520px;
  }
`;
