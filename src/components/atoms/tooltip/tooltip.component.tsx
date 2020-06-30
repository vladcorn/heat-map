import React from 'react';
import MaterialTooltip, {
  TooltipProps as MaterialTooltipProps,
} from '@material-ui/core/Tooltip';

type Props = MaterialTooltipProps;

export function Tooltip(props: Props) {
  return <MaterialTooltip {...props} />;
}
