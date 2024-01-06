/* eslint-disable max-len */
import { FC } from 'react';
import { ISvgProps } from '@shared/lib/interfaces';

export const MoodGoodSvg: FC<ISvgProps> = ({ color = '#323232', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" {...props}>
      <circle cx="22.5" cy="22.5" r="16.875" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.8754 18.75H16.8941" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.1254 18.75H28.1441" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.8125 28.125C19.0468 29.3848 20.7363 30.0947 22.5 30.0947C24.2637 30.0947 25.9532 29.3848 27.1875 28.125" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
