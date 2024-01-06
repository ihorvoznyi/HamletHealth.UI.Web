import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-[400px] 

    flex 
    justify-between 

    p-[4px] 
    bg-[#F4F4F4] 

    border 
    border-black 
    rounded-[4px]
  `),
  activity: ctl(`
    text-[14px] 
    leading-normal 
    tracking-[0.5px]
  `),
  list: 'flex',
  item: ctl(`
    flex 
    items-center 
    gap-[1px]
  `),
  streak: 'fs12SemiBold',
  divider: ctl(`
    w-[2px] 
    h-[20px] 
    bg-black 
    mx-[8px]
  `),
};
