import { FC } from 'react';
import { ISvgProps } from '@shared/lib/interfaces';

export const ArrowRightSvg: FC<ISvgProps> = ({ fill, ...svgProps }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <g id="Icon" clipPath="url(#clip0_1443_20714)">
        <path id="Vector" d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" />
      </g>
      <defs>
        <clipPath id="clip0_1443_20714">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};
