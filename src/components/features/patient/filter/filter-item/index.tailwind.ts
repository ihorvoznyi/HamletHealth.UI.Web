import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
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
  active: 'bg-[#E7E7E7] border-black',
  text: 'fs12Regular',
  closeIcon: 'cursor-pointer'
};
