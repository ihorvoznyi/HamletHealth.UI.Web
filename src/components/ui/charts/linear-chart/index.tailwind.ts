import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'relative mx-10',
  noData: ctl(`
    text-[14px] 
    absolute 
    left-1/2 
    top-1/2 
    -translate-x-1/2 
    -translate-y-1/2
  `),
};
