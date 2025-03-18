import React from 'react';
import { IconProps } from '@/types/common';

const CheckIcon: React.FC<IconProps> = ({
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
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.2244 5.80371L8.05778 14.9704L3.89111 10.8037'
        stroke={fill}
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CheckIcon;
