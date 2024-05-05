import ctl from '@netlify/classnames-template-literals';

export const classes = {
  wrapper: 'flex',
  container: ctl(`
    flex 
    flex-col
    flex-[50%] 
    w-full 
    h-screen 
    items-center 
    text-center
    pt-[120px] 
    bg-cultured-primary 
    -mt-[80px]
  `),
  img: ctl(`
    mx-auto 
    px-[38px] 
    py-[22px] 
    mt-[56px]
  `),
  contentContainer: ctl(`
    max-w-[400px] 
    mt-[50px] 
    text-center
  `),
  title: ctl(`
    mb-[24px] 
    fs32Bold
  `),
  paragraph: ctl(`
    fs14Regular
    opacity-[.8] 
  `),
};