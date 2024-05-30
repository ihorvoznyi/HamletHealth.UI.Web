import ctl from '@netlify/classnames-template-literals';

export const classes = {
  wrapper: ctl(`
    flex 
    items-center 
    justify-center
    
    fixed 
    inset-0 
    z-[9999] 

    bg-black/[0.2] 
  `),
  container: ctl(`
    bg-white 
    w-[600px] 
    p-[30px] 
    rounded-[8px]
  `),
};
