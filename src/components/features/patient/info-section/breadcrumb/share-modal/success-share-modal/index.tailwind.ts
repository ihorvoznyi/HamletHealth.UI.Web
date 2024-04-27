import ctl from '@netlify/classnames-template-literals';

export const classes = {
  modal: {
    container: ctl(`
      space-y-[40px] 
      rounded-[4px] 
      p-[40px]
    `),
  },
  container: ctl(`
    w-[310px] 

    flex 
    flex-col 
    items-center 
    gap-[40px]

    mx-auto 
  `),
  title: 'text-center fs26Bold',
  paragraph: ctl(`
    fs14Regular 
    opacity-[.80] 
    text-center
  `),
  checkContainer: ctl(`
    w-[104px] 
    h-[104px]

    flex 
    items-center 
    justify-center

    rounded-[50%]
    bg-green/[.16] 
  `),
  backBtn: {
    container: 'w-full py-[16px]'
  },
};
