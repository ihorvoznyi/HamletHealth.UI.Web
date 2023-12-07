import ctl from "@netlify/classnames-template-literals";

export const classes = {
  container: 'max-w-[600px] mx-auto',
  title: 'fs26SemiBold',
  subtitle: 'fs14Regular mt-[12px] text-black/[.8]',
  form: ctl(`
    grid 
    grid-cols-2 
    gap-x-[32px] 
    gap-y-[20px] 
    mt-[48px] 
    mb-[56px]
  `),
  btn: {
    container: ctl(`
      w-[300px] 
      mx-auto 
      px-[8px] 
      py-[16px] 
      self-center
    `)
  }
};