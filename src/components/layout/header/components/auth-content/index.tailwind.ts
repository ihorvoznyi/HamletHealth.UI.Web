import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    items-center
    gap-[40px]
  `),
  nav: ctl(`
    flex
    items-center
    gap-[24px]
    fs14Regular
  `),
  inactiveLink: ctl(`
    text-black/[.54]
    opacity-[.8]
  `),
  activeLink: ctl(`
    text-black
    underline
  `),
  btn: {
    container: ctl(`
      bg-han-blue 
      py-[6px] 
      pl-[8px] 
      pr-[16px] 
    `),
  },
  line: ctl(`
    h-[80px]
    w-[1px]
    bg-timberwolf 
    opacity-[.64]
  `),
  img: ctl(`
    w-[40px]
    h-[40px]
    cursor-pointer
  `),
};