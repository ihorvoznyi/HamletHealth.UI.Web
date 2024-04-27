import ctl from '@netlify/classnames-template-literals';

export const classes = {
  form: ctl(`
    w-[288px] 

    flex 
    flex-col 
    items-center 
    gap-[20px] 

    self-center
  `),
  input: { container: 'w-full' },
  btnsContainer: ctl(`
    w-full
    flex 
    flex-col 
    space-y-[15px] 
  `),
  loginBtn: ctl(` 
    w-full
    text-white
    col-span-2
    bg-han-blue
    py-[16px]
    fs12SemiBold
    rounded-[4px]
    uppercase
  `),
  changePassBtn: {
    container: ctl(`
      normal-case 
      fs14Regular 
      text-black/[0.5] 
      p-0 
      self-end
    `),
  },
};
