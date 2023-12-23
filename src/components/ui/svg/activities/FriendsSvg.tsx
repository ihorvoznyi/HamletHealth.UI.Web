/* eslint-disable max-len */
import { FC } from 'react';
import { ISvgProps } from '@shared/lib/interfaces';

export const FriendsSvg: FC<ISvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <ellipse cx="9.33366" cy="6.66667" rx="2.66667" ry="2.66667" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66634 29.3327V22.666L5.33301 21.3327V15.9993C5.33301 15.263 5.92996 14.666 6.66634 14.666H11.9997C12.7361 14.666 13.333 15.263 13.333 15.9993V21.3327L11.9997 22.666V29.3327" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="22.6667" cy="6.66667" rx="2.66667" ry="2.66667" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.9997 29.3327V23.9993H17.333L19.9997 15.9993C19.9997 15.263 20.5966 14.666 21.333 14.666H23.9997C24.7361 14.666 25.333 15.263 25.333 15.9993L27.9997 23.9993H25.333V29.3327" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
