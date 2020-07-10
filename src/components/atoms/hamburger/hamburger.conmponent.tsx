import React from 'react';
import cx from 'classnames';
import './hamburger.scss';

type Props = {
  toggleMenu?: () => void;
  isVisible?: boolean;
};

export const Hamburger = (props: Props) => {
  const classNames = cx(
    'hamburger hamburger--collapse hamburger-btn hamburger-btn-menu',
    { 'is-active': props.isVisible }
  );

  return (
    <button
      className={classNames}
      type='button'
      onClick={props.toggleMenu}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner' />
      </span>
    </button>
  );
};

