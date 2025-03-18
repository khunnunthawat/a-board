import React from 'react';
import { IconProps } from '@/types/common';

const CommentIcon: React.FC<IconProps> = ({
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
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14 8.69336C14 12.0071 11.3137 14.6934 8 14.6934C7.2019 14.6934 6.4402 14.5375 5.74366 14.2547C5.61035 14.2005 5.54369 14.1734 5.48981 14.1614C5.43711 14.1495 5.3981 14.1452 5.34409 14.1452C5.28887 14.1452 5.22872 14.1552 5.10843 14.1753L2.73651 14.5706C2.48812 14.612 2.36393 14.6327 2.27412 14.5942C2.19552 14.5605 2.13289 14.4978 2.09917 14.4192C2.06065 14.3294 2.08135 14.2052 2.12275 13.9569L2.51807 11.5849C2.53812 11.4646 2.54814 11.4045 2.54814 11.3493C2.54813 11.2953 2.54381 11.2563 2.532 11.2035C2.51992 11.1497 2.49285 11.083 2.43871 10.9497C2.15582 10.2532 2 9.49146 2 8.69336C2 5.37965 4.68629 2.69336 8 2.69336C11.3137 2.69336 14 5.37965 14 8.69336Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CommentIcon;
