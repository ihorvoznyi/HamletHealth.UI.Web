import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-[312px] 
    flex 
    flex-col 
    self-center 
    text-start
  `),
  title: 'fs26Bold mb-[5px]',
  subtitle: 'fs15Regular',
  form: ctl(`
    flex 
    justify-between 
    my-[40px]
  `),
  error: ctl(`
    text-red 
    text-center 
    fs11SemiBold 
    mb-[12px]
  `),
  verifyBtn: {
    container: ctl(`
      bg-han-blue 
      normal-case
      py-[16px]
    `),
  },
  resendBtn: {
    container: ctl(`
      mt-[12px] 
      py-[16px] 
      border-none 
      text-han-blue
    `),
  },
};
