import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center
    gap-[12px]

    cursor-pointer
  `),
  month: ctl(`
    pt-[4px] 
    fs14SemiBold 
    text-dark-charcoal
  `),
  icon: 'w-[34px]'
};
