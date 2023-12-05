import { FC, SVGProps } from 'react';

/* eslint-disable max-len */
export const SyropSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 21H16C16.5523 21 17 20.5523 17 20V10C17 8.34315 15.6569 7 14 7H10C8.34315 7 7 8.34315 7 10V20C7 20.5523 7.44772 21 8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14H14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12V16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 7V4C10 3.44772 10.4477 3 11 3H13C13.5523 3 14 3.44772 14 4V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
