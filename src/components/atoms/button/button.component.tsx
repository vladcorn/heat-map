import React from 'react';
import cn from 'classnames';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@root/theme';

type Props = {} & ButtonProps;

export const Button = ({ className, ...props }: Props) => {
  const classes = useStyles();
  return <MaterialButton className={cn(classes.root, className)} {...props} />;
};

const useStyles = makeStyles({
  root: {
    height: 47,
    boxShadow: theme.shadows[0],
    '&:hover': {
      boxShadow: theme.shadows[0],
    },
    '&:active': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    },
  },
});
