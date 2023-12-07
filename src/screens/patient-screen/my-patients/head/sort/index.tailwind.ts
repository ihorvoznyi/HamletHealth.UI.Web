import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    px-[16px] 
    py-[12px] 
    gap-[10px] 
    inline-flex
    items-center 
    cursor-pointer
    w-full
  `),
  paragraph: 'fs14Regular text-black/[.40]'
};
