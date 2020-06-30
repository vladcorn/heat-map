import React from 'react';
import { ReactComponent as Logo } from '@images/logo.svg';

type ComponentSvg = React.FC<React.SVGProps<SVGSVGElement>>;
type Props = {
  variant: IconVariant;
  className?: string;
  style?: React.CSSProperties;
};
type IconVariant = 'logo';
type IconVariantComponents = {
  [T in IconVariant]: ComponentSvg;
};

const variantComponents: IconVariantComponents = {
  logo: Logo,
};

export const Icon = (props: Props) => {
  const Component = variantComponents[props.variant];

  return Component ? <Component {...props} /> : null;
};
