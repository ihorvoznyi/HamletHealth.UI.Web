import { ISvgProps } from '@shared/lib/types';
import { FC } from 'react';

/* eslint-disable max-len */
export const WideCheckSvg: FC<ISvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <g clipPath="url(#clip0_1443_16221)">
        <path d="M17.9999 32.3397L9.65995 23.9997L6.81995 26.8197L17.9999 37.9997L41.9999 13.9997L39.1799 11.1797L17.9999 32.3397Z" fill="#92C2A0"/>
      </g>
      <defs>
        <clipPath id="clip0_1443_16221">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};
