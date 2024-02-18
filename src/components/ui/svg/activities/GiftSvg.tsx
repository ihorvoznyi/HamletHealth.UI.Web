/* eslint-disable max-len */
import { FC } from 'react';
import { ISvgProps } from '@shared/lib/types';

export const GiftSvg: FC<ISvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <rect x="4" y="10.666" width="24" height="5.33333" rx="1" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9997 10.666V27.9993" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.3337 16V25.3333C25.3337 26.8061 24.1398 28 22.667 28H9.33366C7.8609 28 6.66699 26.8061 6.66699 25.3333V16" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0003 10.6673C8.15938 10.6673 6.66699 9.17487 6.66699 7.33392C6.66699 5.49297 8.15938 4.00059 10.0003 4.00059C12.6326 3.95472 15.0133 6.59991 16.0003 10.6673C16.9874 6.59991 19.368 3.95472 22.0003 4.00059C23.8413 4.00059 25.3337 5.49297 25.3337 7.33392C25.3337 9.17487 23.8413 10.6673 22.0003 10.6673" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
