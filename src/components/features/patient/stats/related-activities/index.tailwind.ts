import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    max-w-[374px]

    flex 
    flex-col 
    gap-[30px]

    px-[22px] 
    pt-[4px] 
    pb-[10px] 

    mt-[34px]
    mr-[133px]
  `),
  title: 'fs22SemiBold',
  moods: ctl(`
    flex 
    items-center 
    gap-[24px]
  `),
  activities: ctl(`
    grid
    grid-cols-4
    gap-x-[26px]
    gap-y-[20px]
  `),
};
