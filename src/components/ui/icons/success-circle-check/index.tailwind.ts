import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-[104px] 
    h-[104px]

    flex 
    items-center 
    justify-center

    rounded-[50%]
    bg-green/[.16] 
  `),
};
