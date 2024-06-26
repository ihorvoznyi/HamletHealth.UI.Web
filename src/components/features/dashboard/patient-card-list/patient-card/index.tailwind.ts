import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    border-l-[8px] 
    bg-white
    min-h-[312px]
  `),
  infoContainer: ctl(`
    h-[184px] 

    flex
    flex-[34%]
    flex-col 
    justify-between 
    
    px-[24px]
    pr-[54px]
  `),
  btn: { container: 'w-[146px]' },
  diagnosis: 'mt-[8px]'
};
