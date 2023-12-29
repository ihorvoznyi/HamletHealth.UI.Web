import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    flex-col
    flex-[50%]
    text-center
    pt-[136px]
    px-[120px]
    pb-[56px]
    mt-[56px]
  `),
  title: 'fs26Bold mb-[40px]',
  loginBtn: {
    container: ctl(`
      w-full
      py-[16px] 
      fs12SemiBold 
      bg-han-blue 
      normal-case
    `),
  },
  changePassBtn: {
    container: ctl(`
      normal-case 
      fs14Regular 
      text-black/[0.5] 
      p-0 
      self-end
    `),
  },
  form: ctl(`
    w-[288px] 

    flex 
    flex-col 
    items-center 
    gap-[20px] 

    self-center
  `),
  btnsContainer: ctl(`
    w-full
    flex 
    flex-col 
    space-y-[15px] 
  `),
  input: { container: 'w-full' },
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
  signUpBtn: { 
    container: ctl(`
      text-han-blue
      font-poppins-600
    `),
  },
};
