import React from 'react';
import { IconProps } from '@/types/common';

const ArrowRightIcon: React.FC<IconProps> = ({
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
      viewBox='0 0 19 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.10645 7.48804L17.1064 7.48804M17.1064 7.48804L11.1064 1.48804M17.1064 7.48804L11.1064 13.488'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowRightIcon;
