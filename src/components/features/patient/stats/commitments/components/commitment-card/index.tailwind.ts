import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-full
    border 
    border-black/[.08]
    rounded-l-[4px]
    p-[20px]
  `),
};
