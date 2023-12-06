import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-col 
    gap-[40px]
  `),
  title: 'fs20Bold mb-[4px]',
  weekday: 'fs12Regular text-black/[.40]',
  list: 'space-y-[30px] mt-[40px]'
};
