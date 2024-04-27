import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    max-w-[400px] 
    flex 
    flex-col 
    items-center 
    mx-auto
    pt-[56px] 
  `),
  title: 'fs26Bold mb-[24px]',
  subtitle: ctl(`
    fs14Regular 
    opacity-[.80] 
    mb-[48px]
  `),
  icon: { container: 'mb-[56px]' },
  btn: {
    container: ctl(`
      w-full 
      max-w-[288px] 
      py-[15px]
    `),
  }
};
