import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-col 
    h-[calc(100vh-80px)]
  `),
  head: 'pt-[40px] px-[80px]',
  title: 'fs26Bold',
  dataContainer: ctl(`
    bg-[#F8F8F8] 
    space-y-[32px] 
    pb-[30px] 
    px-[80px]
  `),
};
