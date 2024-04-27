import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'max-w-[600px] mx-auto flex flex-col',
  title: 'fs26SemiBold',
  subtitle: 'fs14Regular mt-[12px] text-black/[.8]',
  form: ctl(`
    mb-[56px] 
    mt-[48px] 
    w-[288px] 
    mx-auto 
    space-y-[20px]
  `),
  formBtn: {
    container: 'border-none text-han-blue gap-[8px]'
  },
  btnsContainer: ctl(`
    flex 
    gap-[16px] 
    mb-[16px]
    justify-center
  `),
  saveBtn: { 
    container: 'w-[208px]',
  },
  skipBtn: {
    container: ctl(`
      border-none 
      text-[12px]
      font-poppins-600
      leading-[16px]
      tracking-[1px]
      w-[280px] 
      py-[16px] 
      self-center
    `),
  }
};
