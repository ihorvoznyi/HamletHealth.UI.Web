import { ISvgProps } from '@shared/lib/types';
import { FC } from 'react';

/* eslint-disable max-len */
const CloseSvg: FC<ISvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#clip0_1443_14598)">
        <path d="M12.6668 4.27398L11.7268 3.33398L8.00016 7.06065L4.2735 3.33398L3.3335 4.27398L7.06016 8.00065L3.3335 11.7273L4.2735 12.6673L8.00016 8.94065L11.7268 12.6673L12.6668 11.7273L8.94016 8.00065L12.6668 4.27398Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_1443_14598">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseSvg;