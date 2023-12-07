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
};