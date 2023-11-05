import ctl from '@netlify/classnames-template-literals';

export const classes = {
  title: ctl(`
    text-[20px] 
    mb-[4px] 
    font-roboto-500 
    leading-[24px] 
    tracking-[0.15px]
  `),
  subtitle: 'text-body-medium font-roboto-400',
  list: ctl(`
    mt-[5px]
    max-h-[330px]
    overflow-auto
  `),
};
