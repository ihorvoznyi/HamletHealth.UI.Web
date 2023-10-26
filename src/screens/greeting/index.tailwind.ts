import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    relative 
    max-w-[408px] 
    w-full 
    h-screen 
    mx-auto 
    overflow-hidden
  `),
  header: ctl(`
    mt-[64px] 
    text-center 
    text-han-blue
  `),
  main: ctl(`
    w-full
    absolute 
    top-[38%] 
    left-1/2
    -translate-x-1/2 
    -translate-y-1/2 
    mt-[81px] 
    text-body-medium 
  `),
  title: ctl(`
    text-[40px] 
    leading-[48px] 
    font-poppins-bold
  `),
  list: ctl(`
    list-disc 
    pl-[23px] 
    mb-[16px
  `),
  listWrapper: ctl(`
    mt-[32px] 
    text-body-medium 
    text-black/[.8]
  `),
  btn: {
    container: ctl(`
      w-full
      mt-[64px]
      bg-han-blue
    `)
  },
};