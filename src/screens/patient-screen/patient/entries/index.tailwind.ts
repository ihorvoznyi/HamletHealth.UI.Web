import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    bg-white 
    mx-[80px] 
    mt-[56px]
  `),
  paragraph: 'fs14Regular',
  filterContainer: 'p-[20px]',
  filterBar: ctl(`
    flex 
    items-center 
    justify-between
  `),
};
