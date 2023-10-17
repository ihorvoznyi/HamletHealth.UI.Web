import ctl from "@netlify/classnames-template-literals";

export const containerStyle = ctl(`
  relative 
  max-w-[408px] 
  w-full 
  h-screen 
  mx-auto 
  overflow-hidden
`);

export const headerStyle = ctl(`
  mt-[64px] 
  text-center 
  text-han-blue
`);

export const mainStyle = ctl(`
  w-full
  absolute 
  top-[38%] 
  left-1/2
  -translate-x-1/2 
  -translate-y-1/2 
  mt-[81px] 
  text-body-medium 
`);

export const titleStyle = ctl(`
  text-[40px] 
  leading-[48px] 
  font-poppins-bold
`);

export const listWrapperStyle = ctl(`
  mt-[32px] 
  text-body-medium 
  text-black/[.8]
`);

export const listStyle = ctl(`
  list-disc 
  pl-[23px] 
  mb-[16px
`);

export const btnStyle = ctl(`
  w-full
  mt-[64px]
  bg-han-blue
`);