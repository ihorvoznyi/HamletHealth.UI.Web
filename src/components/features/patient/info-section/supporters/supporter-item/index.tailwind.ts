import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'flex gap-[16px]',
  avatar: ctl(`
    w-[40px] 
    h-[40px]
    bg-[#EA94FF] 
  `),
  name: 'fs14Regular opacity-[.80]',
  nameContainer: 'flex flex-col',
  paragraph: ctl(`
    fs14Regular 
    opacity-[.80] 
    text-black/[.40]
  `),
};