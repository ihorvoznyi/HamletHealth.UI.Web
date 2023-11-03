import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    w-full 
    py-[16px] 
    px-[14px] 
    border 
    border-sonic-silver 
    rounded-[4px]
  `),
  input: 'w-full placeholder:text-black',
  searchIcon: ctl(`
    mr-[16px] 
    min-w-[24px] 
    min-h-[24px]
  `),
  crossIcon: 'cursor-pointer',
};