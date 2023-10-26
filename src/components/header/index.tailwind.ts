import ctl from '@netlify/classnames-template-literals';

export const classes = {
  header: ctl(`
    flex 
    absolute 
    right-0 
    left-0 
    top-0 
    h-[80px]
    justify-between 
    items-center 
    py-[22px] 
    px-[80px] 
    bg-white
  `),
  line: ctl(`
    absolute 
    left-1/2 
    -translate-x-1/2 
    top-full
    h-[1px] 
    w-[calc(100%-160px)] 
    bg-timberwolf/[.64]
  `),
};
