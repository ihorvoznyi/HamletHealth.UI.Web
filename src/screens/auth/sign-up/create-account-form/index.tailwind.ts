import ctl from '@netlify/classnames-template-literals';

export const classes = {
  title: 'fs32Bold',
  container: ctl(`
    flex
    flex-col
    justify-between
    flex-[50%]
    text-center
    pt-[136px]
    px-[120px]
    pb-[56px]
  `),
  signInContainer: ctl(`
    flex 
    items-center 
    justify-center 
    gap-[8px]
  `),
  form: ctl(`
    grid
    grid-cols-2
    gap-x-[19px]
    gap-y-[20px]
    my-[40px]
  `),
  gridWideInput: {
    container: 'col-span-2'
  },
  signInBtn: { 
    container: ctl(`
      text-han-blue
      font-poppins-600
    `),
  },
  createBtn: {
    container: ctl(`
      w-full 
      bg-han-blue 
      py-[17px]
    `),
  },
  signInParagraph: ctl(`
    fs14Regular
    text-black 
    opacity-[.8]
  `),
  policyParagraph: ctl(`
    mt-[16px] 
    fs12Regular
    text-black/[.4]
  `),
  policySpan: 'text-han-blue',
  formWrapper: 'mt-[56px]'
};