import { FC, SVGProps } from 'react';

const DropDownIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1443_20408)">
        <path d="M7 10L12 15L17 10H7Z" fill="#D8D3CF"/>
      </g>
      <defs>
        <clipPath id="clip0_1443_20408">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default DropDownIcon;