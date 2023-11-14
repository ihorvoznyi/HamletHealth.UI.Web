import ctl from "@netlify/classnames-template-literals";

export const classes = {
  container: 'max-w-[600px] mx-auto',
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
    mt-[56px] 
    justify-center
  `),
  saveBtn: { 
    container: 'w-[208px]',
  }
};
