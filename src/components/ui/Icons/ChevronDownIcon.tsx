import React from 'react';
import { IconProps } from '@/types/common';

const ChevronDownIcon: React.FC<IconProps> = ({
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
        d='M5.26123 7.81982L10.2612 12.8198L15.2612 7.81982'
        stroke={fill}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronDownIcon;