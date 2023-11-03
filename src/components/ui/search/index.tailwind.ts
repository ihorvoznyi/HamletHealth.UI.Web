import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    w-full  
    px-[14px]
    border 
    border-sonic-silver 
    rounded-[4px]
  `),
  input: ctl(`
    w-full 
    tracking-[0.5px]
    placeholder:text-eerie-black 
    placeholder:font-roboto-400
    py-[16px]
  `),
  searchIcon: ctl(`
    mr-[16px] 
    min-w-[24px]
  `),
  crossIcon: 'cursor-pointer',
};