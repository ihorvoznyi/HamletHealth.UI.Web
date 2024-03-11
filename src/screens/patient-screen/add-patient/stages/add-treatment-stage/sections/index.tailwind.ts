import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    gap-[24px] 
    mt-[50px]
  `),
  title: 'fs26SemiBold',
  defineBtn: {
    base: ctl(`  
      mt-[20px] 
      float-right
      bg-white 
      text-royal-purple 
      rounded-[4px] 
      tracking-[1.25px] 
      leading-[16px] 
      font-roboto-500 
      w-[300px] 
      py-[14px] 
      px-[16px]
    `),
    active: 'purple-gradient',
    disabled: ctl(`
      bg-white 
      text-eerie-black/[.38] 
      border 
      border-eerie-black/[.12]
    `),
  },
};
