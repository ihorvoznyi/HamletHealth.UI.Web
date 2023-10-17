import ctl from '@netlify/classnames-template-literals';

export const btnContainerStyle = ctl(`
  flex
  items-center
  justify-center
  px-[8px]
  py-[6px]
  uppercase
`);

export const btnContentStyle = ctl(`
  flex
  items-center
  justify-between
  text-label-medium
  gap-2
  px-[6px]
  py-[4px]
`);

export const primaryBtnStyle = ctl(`
  bg-green 
  text-white
`);

export const outlinedBtnStyle = ctl(`
  border-[1px] 
  border-green 
  inherit 
  text-green
`);

export const inheritBtnStyle = ctl(`
  inherit 
  text-green
`);