import ctl from '@netlify/classnames-template-literals';

export const classes = {
  contentContainer: ctl(`
    max-w-[288px]
    text-center
  `),
  paragraph: ctl(`
    opacity-[.8] 
    text-black 
    fs14Regular
    mt-[24px] 
    mb-[63px]
  `),
  btn: {
    container: ctl(`
      bg-han-blue 
      w-full 
      py-[17px] 
      font-poppins-600
      tracing-[1px]
    `),
  }
};