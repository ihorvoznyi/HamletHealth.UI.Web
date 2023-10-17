import ctl from "@netlify/classnames-template-literals";

export const inActiveTextStyle = 'text-black/[.12]';

export const containerStyle = ctl(`
  relative
  min-w-[250px]
  border 
  border-black/[.12]
  rounded-[4px]
  duration-200
  flex 
  items-center 
  justify-between
`);

export const labelStyle = ctl(`
  absolute 
  transition-all
  ease-out
  duration-200
  px-[3px] 
  left-3
  bg-white
  text-label-large
`);

export const labelFocusStyle = ctl(`
  -top-[10px] 
  z-[100] 
  text-han-blue
  cursor-text
`);

export const labelUnfocusedStyle = ctl(`
  transform 
  top-1/2 
  -translate-y-1/2 
  ${inActiveTextStyle}
`);

export const inputStyle = ctl(`
  relative
  z-5
  w-full
  px-4
  py-3
  text-label-large
  placeholder:text-label-large
  placeholder:${inActiveTextStyle}
  text-black/[.88]
`);

export const iconStyle = ctl(`
  absolute 
  right-[17px]
`);