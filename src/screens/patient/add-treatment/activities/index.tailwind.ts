import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex-[40%] 
    text-left 
    font-roboto-400
  `),
  list: ctl(`
    mt-[5px]
    max-h-[330px]
    overflow-auto
  `),
  item: ctl(`
    flex 
    justify-between 
    items-center 
    px-[20px] 
    py-[12px] 
    hover:bg-han-blue/[.10]
  `),
  type: ctl(`
    text-[13px] 
    tracking-[0.15px]
    font-roboto-400
  `),
};