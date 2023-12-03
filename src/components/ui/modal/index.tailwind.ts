import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-center
    
    absolute 
    inset-0 
    z-[9999] 

    bg-black/[0.2] 
  `),
  content: ctl(`
    bg-white 
    w-[600px] 
    p-[30px] 
    rounded-[8px]
  `),
};
