import ctl from '@netlify/classnames-template-literals';

export const classes = {
  item: ctl(`
    flex
    items-center 
    gap-[4px] 
    px-[8px] 
    py-[4px]
    rounded-[4px]
    border
    border-black/[.16]
    cursor-pointer
    select-none
  `),
  list: ctl(`
    flex
    items-center 
    gap-[6px] 
    mt-[6px]
  `),
  active: 'bg-[#E7E7E7] border-black',
  text: 'fs12Regular',
  closeIcon: 'cursor-pointer',
  paragraph: 'fs14Regular',
};
