import ctl from '@netlify/classnames-template-literals';

export const classes = {
  filterContainer: 'flex items-start justify-between px-[40px] py-[16px]',
  container: ctl(`
    flex
    items-center 
    gap-[6px] 
    mt-[6px]
  `),
  paragraph: 'fs14Regular',
  bar: ctl(`
    flex 
    items-center 
    justify-between
  `),
};
