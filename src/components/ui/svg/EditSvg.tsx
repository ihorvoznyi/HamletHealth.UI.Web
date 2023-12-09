/* eslint-disable max-len */
import { FC, SVGProps } from 'react';

export const EditSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
      <g clipPath="url(#clip0_1443_18362)">
        <path opacity="0.3" d="M5 18.0795V18.9995H5.92L14.98 9.93953L14.06 9.01953L5 18.0795Z" fill="#323232"/>
        <path d="M20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19Z" fill="#323232"/>
      </g>
      <defs>
        <clipPath id="clip0_1443_18362">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};