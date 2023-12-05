import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-wrap 
    items-center
  `),
  item: 'fs14Regular',
  sep: ctl(`
    w-[2px] 
    h-[14px] 
    bg-black 
    mx-[8px]
  `),
};
