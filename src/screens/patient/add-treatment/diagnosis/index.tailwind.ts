import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex-[33%] 
    text-left 
    font-roboto-400
  `),
  head: 'mb-[20px]',
  list: 'mt-[5px]',
  item: ctl(`
    p-[20px] 
    text-body-large
    font-roboto-500
    tracking-[0.15px] 
    roudned-[4px]
    hover:bg-han-blue/[.10]
    hover:cursor-pointer
  `),
};