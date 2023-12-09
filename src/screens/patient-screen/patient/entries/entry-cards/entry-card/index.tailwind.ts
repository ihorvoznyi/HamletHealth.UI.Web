import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'flex gap-[24px] pr-[24px]',
  dateContainer: 'flex-[10%] p-[20px]',
  day: 'fs20Bold',
  weekday: ctl(`
    text-[12px] 
    font-poppins-500 
    leading-[16px] 
    tracking-[0.12px] 
    text-black/[.40] 
    uppercase
  `),
};
