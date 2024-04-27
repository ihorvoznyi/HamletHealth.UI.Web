import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    absolute 
    flex 
    flex-col 
    items-center 
    -translate-x-1/2 
    -translate-y-1/2 
    top-1/2 
    left-1/2 
    px-[160px] 
    py-[72px] 
    bg-cultured-primary
  `),
  title: 'mt-[24px] fs26SemiBold',
  content: ctl(`
    max-w-[390px]
    text-center
  `),
  thankParagraph: ctl(`
    opacity-[.8] 
    text-black 
    fs14Regular 
    mt-[24px]
  `),
  emailParagraph: ctl(`
    mt-[72px] 
    opacity-[.8] 
    text-black 
    fs14Regular
  `),
  link: ctl(`
    cursor-pointer 
    text-han-blue 
    font-poppins-600
  `),
};