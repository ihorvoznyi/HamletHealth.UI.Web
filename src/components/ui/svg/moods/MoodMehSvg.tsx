import { FC } from 'react';
import { ISvgProps } from '@shared/lib/interfaces';

export const MoodMehSvg: FC<ISvgProps> = ({ color = 'black', ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9998 13.3327H12.0132" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9998 13.3327H20.0132" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20.0007H20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
