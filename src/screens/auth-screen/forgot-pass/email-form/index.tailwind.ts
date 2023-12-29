import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-col 
    w-[312px] 
    self-center
  `),
  title: 'fs26Bold',
  form: ctl(`
    w-full 
    self-center 
    mt-[40px] 
    space-y-[20px]
  `),
  signUpContainer: ctl(`
    flex 
    items-center 
    justify-center 
    gap-[8px]
    mt-[50px]
  `),
  signUpParagraph: ctl(`
    fs14Regular
    text-black 
    opacity-[.8]
  `),
  codeBtn: {
    container: ctl(`
      w-full
      py-[16px] 
      fs12SemiBold 
      bg-han-blue 
      normal-case
    `),
  },
  signUpBtn: { 
    container: ctl(`
      text-han-blue
      font-poppins-600
    `),
  },
};
