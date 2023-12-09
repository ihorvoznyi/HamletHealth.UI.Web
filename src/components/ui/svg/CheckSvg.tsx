import { SVGProps } from 'react';
import { FC } from 'react';

export const CheckSvg: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="check">
        <path 
          id="Vector" 
          // eslint-disable-next-line max-len
          d="M7.03944 11.3022L6.96898 11.2318L6.89827 11.302L5.92954 12.2639L5.85833 12.3346L5.92929 12.4056L9.74282 16.2191L9.81353 16.2898L9.88424 16.2191L18.0707 8.03262L18.1414 7.96191L18.0707 7.8912L17.1088 6.92929L17.0381 6.85861L16.9674 6.92926L9.81356 14.0763L7.03944 11.3022Z" 
          fill="#92C2A0" 
          stroke="#92C2A0" 
          strokeWidth="0.2"/>
      </g>
    </svg>
  );
};
