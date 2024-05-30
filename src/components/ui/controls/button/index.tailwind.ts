import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    items-center
    justify-center
    gap-2
    px-[14px]
    py-[10px]
    text-[12px] 
    leading-[16px] 
    font-poppins-600 
    tracking-[1px]
    uppercase
    rounded-[4px]

    disabled:opacity-60
    disabled:border-black/[.80]
    disabled:cursor-no-drop
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
  `),
};
