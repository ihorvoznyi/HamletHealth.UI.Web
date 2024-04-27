import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between 
    grow

    relative 

    pt-[52px] 
  `),
  h2: 'fs20Bold text-black/[.24]',
};
