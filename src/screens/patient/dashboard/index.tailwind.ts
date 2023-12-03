import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'pt-[40px]',
  title: 'fs26Bold',
  statContainer: ctl(`
    flex 
    gap-[24px] 
    mt-[40px]
  `),
};
