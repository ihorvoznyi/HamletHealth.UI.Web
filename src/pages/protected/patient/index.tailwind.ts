import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    flex-col
    h-full
  `),
  tabsContainer: ctl(`
    flex-1 
    pt-[48px] 
    bg-[#F8F8F8]
  `),
};
