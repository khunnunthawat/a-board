import React from 'react';
import { IconProps } from '@/types/common';

const MenuIcon: React.FC<IconProps> = ({
  className,
  width = '100%',
  height = '100%',
  fill = 'currentColor',
  ...props
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 41 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.6152 20.7665H29.6152M11.6152 14.7665H29.6152M11.6152 26.7665H29.6152'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MenuIcon;
