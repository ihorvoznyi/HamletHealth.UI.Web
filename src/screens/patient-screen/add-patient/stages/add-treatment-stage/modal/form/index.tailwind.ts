import ctl from '@netlify/classnames-template-literals';

export const classes = {
  form: 'space-y-[16px]',
  btn: ctl(`
    w-full 
    h-[48px]
    mt-[14px] 
    text-white 
    bg-han-blue 
    rounded-[4px] 
    fs16RobotoRegular 
  `),
};