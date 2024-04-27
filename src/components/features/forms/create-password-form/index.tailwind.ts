import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-col 
    w-[312px] 
    self-center
  `),
  title: 'text-left fs26Bold',
  subtitle: 'text-left fs15Regular',
  form: ctl(`
    space-y-[10px]
    mt-[40px]
    mb-[20px]
  `),
  submitBtn: {
    container: ctl(`
      bg-han-blue 
      normal-case
      py-[16px]
    `),
  },
};
