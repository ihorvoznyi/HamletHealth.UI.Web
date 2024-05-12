import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    flex-col
    min-h-[calc(100vh-80px)]
  `),
  tabsContainer: ctl(`
    flex-1 
    py-[48px] 
    bg-[#F8F8F8]
  `),
};
