import { FC } from 'react';
import { SvgAttrsType } from '../index.interfaces';

const GradientDashedSvg: FC<Pick<SvgAttrsType, 'color'>> = ({ color }) => {
  const id = 'paint0_linear_' + Math.random() * 10000;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
      <path d="M0 1L166 1" stroke={`url(#${id})`} strokeDasharray="3 3"/>
      <defs>
        <linearGradient 
          id={id}
          x1="166" 
          y1="0.999529" 
          x2="65.5" 
          y2="0.999814"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.32"/>
          <stop offset="1" stopColor={color}/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const SolidDashedSvg: FC<Pick<SvgAttrsType, 'color'>> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
    <path d="M0 1L166 1" stroke={color} strokeDasharray="3 3"/>
  </svg>
);

const DashedSvg: FC<SvgAttrsType> = ({ fillType = 'partial', color = 'rgba(0, 0, 0, 0.32)' }) => {
  return fillType === 'partial' 
    ? <GradientDashedSvg color={color} /> 
    : <SolidDashedSvg color={color} />;
};

export default DashedSvg;
