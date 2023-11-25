import { FC, SVGProps } from 'react';

export const ArrowLeftSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0_1443_18579)">
        <path d="M9 19L10.41 17.59L5.83 13L22 13V11L5.83 11L10.42 6.41L9 5L2 12L9 19Z" fill="#92C2A0"/>
      </g>
      <defs>
        <clipPath id="clip0_1443_18579">
          <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
        </clipPath>
      </defs>
    </svg>
  );
};
