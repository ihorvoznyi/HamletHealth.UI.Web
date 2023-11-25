import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex-[33%] 
    text-left 
    font-roboto-400
  `),
  head: 'mb-[20px]',
  item: ctl(`
    p-[20px] 
    fs16RobotoMedium 
    roudned-[4px]
    hover:bg-han-blue/[.10]
    hover:cursor-pointer
  `),
};