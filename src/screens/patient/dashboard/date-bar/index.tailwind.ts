import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between 
    grow

    relative 

    pt-[52px] 
    px-[80px]
  `),
  h2: 'fs20Bold text-black/[.24]',
  dateContainer: ctl(`
    flex 
    items-center
    gap-[12px]

    cursor-pointer
  `),
  month: 'pt-[4px] fs14SemiBold text-dark-charcoal',
  icon: 'w-[34px]'
};
