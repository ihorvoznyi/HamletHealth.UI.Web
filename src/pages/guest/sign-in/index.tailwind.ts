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
