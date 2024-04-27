import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-[64px] 
    h-[54px] 
    rounded-[4px] 
    border-2 
    border-[#B8DBDE]
  `),
  input: ctl(`
    w-full 
    h-full 
    p-[10px] 
    text-center
  `),
};
