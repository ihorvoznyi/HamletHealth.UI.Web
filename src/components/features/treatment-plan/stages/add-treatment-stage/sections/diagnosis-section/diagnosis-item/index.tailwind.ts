import ctl from '@netlify/classnames-template-literals';

export const classes = {
  item: ctl(`
    p-[20px] 
    fs16RobotoMedium 
    rounded-[4px]
    hover:bg-han-blue/[.10]
    hover:cursor-pointer
  `),
  active: 'bg-han-blue/[.10]'
};
