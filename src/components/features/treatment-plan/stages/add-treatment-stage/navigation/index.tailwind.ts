import ctl from '@netlify/classnames-template-literals';

export const classes = {
  btnsContainer: ctl(`
    flex 
    gap-[16px] 
    mt-[100px] 
    justify-center
    pb-[40px]
  `),
  processBtn: {
    base: 'w-[208px]',
    disabled: 'text-eerie-black bg-light-silver'
  },
};
