import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-wrap 
    items-center
  `),
  item: ctl(`
    flex 
    items-center 
    gap-[4px] 
    fs14Regular 
    relative
  `),
  sep: ctl(`  
    after:w-[2px] 
    after:h-[14px] 
    after:bg-black 
    after:mx-[8px]
  `),
};
