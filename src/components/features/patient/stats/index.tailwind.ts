import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-col
    justify-between 
     
    bg-white
    
    overflow-x-hidden
    py-[16px] 
    pb-[90px]

    mx-[80px]
    mt-[34px]
  `),
  streaks: ctl(`
    space-y-[30px] 
    mt-[20px] 
    pl-[40px]
  `),
  chart: ctl(`
    flex 
    justify-between 
    pl-[40px]
  `),
  pieChartContainer: ctl(`
    flex 
    flex-col 
    mt-[32px] 
    ml-10
  `),
  pieChartTitle: 'fs22SemiBold',
  loader: { container: 'text-center' },
};
