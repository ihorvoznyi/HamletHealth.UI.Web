import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    items-center
    justify-center
    gap-2
    px-[14px]
    py-[10px]
    text-label-medium
    uppercase
    rounded-[4px]
  `),
  primary: ctl(`
    bg-green 
    text-white
  `),
  outlined: ctl(`
    border-[1px] 
    border-green 
    inherit 
    text-green
  `),
  inherit: ctl(`
    inherit 
    text-green
  `)
};