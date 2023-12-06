/* eslint-disable max-len */
import { FC } from 'react';
import { ISvgProps } from '@shared/lib/interfaces';

export const ArrowForwardSvg: FC<ISvgProps> = ({ fill, ...svgProps }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...svgProps}>
      <g opacity="0.9">
        <g clipPath="url(#clip0_1443_17524)">
          <path d="M15.9997 5.33398L14.1197 7.21398L21.5597 14.6673H5.33301V17.334H21.5597L14.1197 24.7873L15.9997 26.6673L26.6663 16.0007L15.9997 5.33398Z" fill={fill} />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1443_17524">
          <rect width="32" height="32" rx="5" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};
