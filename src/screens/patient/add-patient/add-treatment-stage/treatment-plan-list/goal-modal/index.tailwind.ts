import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: '',
  cancelBtn: {
    container: ctl(`
      w-full 
      text-royal-purple 
      border-none 
      py-[10px] 
      px-[16px] 

      fs14RobotoRegular
      normal-case
    `),
  },
  contentContainer: 'mt-[40px] space-y-[24px]',
  saveBtn: {
    container: ctl(`
      w-full 
      text-[14px] 
      py-[16px] 
      font-roboto-400 
      tracking-[1.25px] 
      leading-[16px] 
      bg-han-blue
    `),
  },
  btnsContainer: 'flex gap-[15px]'
};

/**
 * 
 *    text-[14px] 
      leading-[20px] 
      tracking-[0.1px] 
      font-roboto-400
 */