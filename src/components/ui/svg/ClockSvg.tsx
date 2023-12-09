import React, { FC, SVGProps } from 'react';

export const ClockSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
      <circle cx="12" cy="12" r="9" stroke="#149961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7V12L15 15" stroke="#149961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
