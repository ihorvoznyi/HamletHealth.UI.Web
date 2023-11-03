import ctl from '@netlify/classnames-template-literals';

export const classes = {
  contentContainer: ctl(`
    max-w-[390px]
    text-center
  `),
  thankParagraph: ctl(`
    opacity-[.8] 
    text-black 
    text-body-medium 
    mt-[24px]
  `),
  emailParagraph: ctl(`
    mt-[72px] 
    opacity-[.8] 
    text-black 
    text-body-medium
  `),
  link: ctl(`
    cursor-pointer 
    text-han-blue 
    font-poppins-600
  `),
};