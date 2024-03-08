import ctl from '@netlify/classnames-template-literals';

export const classes = {
  title: ctl(`
    fs20RobotoMedium
    mb-[4px] 
  `),
  subtitle: 'fs14RobotoRegular',
  list: ctl(`
    mt-[5px]
    max-h-[330px]
    overflow-auto
  `),
  btnsContainer: ctl(`
    flex 
    gap-[16px] 
    mt-[100px] 
    justify-center
    pb-[40px]
  `),
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
    disabled: 'text-eerie-black/[.38] bg-white border border-eerie-black/[.12]',
  },
  processBtn: {
    base: 'w-[208px]',
    disabled: 'text-eerie-black bg-light-silver'
  },
};
