import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    gap-[32px] 
    mx-[80px]
  `),
  tab: {
    base: 'fs26Bold text-black/[.40] cursor-pointer',
    active: ctl(`
      relative 
      text-black
      after:absolute 
      after:w-full 
      after:h-[4px] 
      after:left-0 
      after:bottom-[-16px] 
      after:bg-black
    `),
  },
};