/* eslint-disable max-len */
import { FC, SVGProps } from 'react';

export const PizzaSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 21.5C8.96 21.5 6.048 20.786 3.5 19.517L12 3L20.5 19.517C17.8578 20.8255 14.9485 21.5043 12 21.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.37988 15.8652C7.48986 16.9425 9.82579 17.5026 12.1949 17.4992C14.4459 17.5022 16.6686 16.9967 18.6969 16.0202" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 11.0109V11.0009" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 13.9991V13.9891" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
