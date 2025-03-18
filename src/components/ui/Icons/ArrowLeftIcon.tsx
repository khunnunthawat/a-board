import React from 'react';
import { IconProps } from '@/types/common';

const ArrowLeftIcon: React.FC<IconProps> = ({
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
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.3398 12.4067H5.33984M5.33984 12.4067L12.3398 19.4067M5.33984 12.4067L12.3398 5.40674'
        stroke={fill}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowLeftIcon;
