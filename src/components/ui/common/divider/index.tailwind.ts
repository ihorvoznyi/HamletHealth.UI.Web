import ctl from '@netlify/classnames-template-literals';

export const classes = {
  divider: {
    horizontal: ctl(`
      h-[1px] 
      w-full 
      bg-black/[0.05]
  `),
    vertical: ctl(`
      h-full 
      w-[1px] 
      bg-black/[0.05]
    `),
  },
};