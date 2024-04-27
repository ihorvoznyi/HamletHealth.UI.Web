import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    gap-[15px] 
    mt-[15px] 
    mb-[44px]
  `),
  streakGroup: ctl(`
    flex
    gap-[15px]
    relative
  `),
  item: ctl(`
    flex 
    flex-col 
    items-center 
    gap-[5px]
  `),
};
