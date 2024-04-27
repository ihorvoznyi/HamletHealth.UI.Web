import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex-1 
    px-[30px] 
    py-[32px] 
    border 
    border-black/[.12] 
    rounded-[4px]
  `),
  label: ctl(`
    fs14Regular 
    text-black/[0.56] 
    mb-[32px]
  `),
  valueContainer: ctl(`
    flex 
    items-center 
    gap-[24px]
  `),
  value: 'fs48Bold'
};
