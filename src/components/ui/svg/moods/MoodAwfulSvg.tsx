/* eslint-disable max-len */
import { FC } from 'react';
import { ISvgProps } from '@shared/lib/types';

export const MoodAwfulSvg: FC<ISvgProps> = ({ color = '#323232', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M32.9363 33.0113C31.5096 34.4792 31.5237 36.8202 32.9681 38.2708C34.4125 39.7214 36.7534 39.7456 38.2275 38.3252C39.7016 36.9048 39.7642 34.5647 38.3682 33.0675L35.6251 30L32.9363 33.0113V33.0113Z" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M39.1219 25.3444C39.287 24.4052 39.3717 23.4536 39.375 22.5C39.375 13.1802 31.8198 5.625 22.5 5.625C13.1802 5.625 5.625 13.1802 5.625 22.5C5.625 31.8198 13.1802 39.375 22.5 39.375C23.7937 39.375 25.05 39.2325 26.25 38.9587" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 18.75C15 18.75 16.3125 18.1875 17.25 17.25C18.1875 16.3125 18.75 15 18.75 15" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.1875 15C27.1875 15 27.75 16.3125 28.6875 17.25C29.625 18.1875 30.9375 18.75 30.9375 18.75" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 30L18.75 26.25L22.5 30L26.25 26.25L30 30" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
