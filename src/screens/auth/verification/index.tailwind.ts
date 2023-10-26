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
  title: ctl(`
    mt-[24px] 
    font-poppins-semi 
    text-[26px] 
    leading-[32px]
  `),
};