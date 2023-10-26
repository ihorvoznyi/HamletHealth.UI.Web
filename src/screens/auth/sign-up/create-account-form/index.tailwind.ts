import ctl from '@netlify/classnames-template-literals';

export const classes = {
  title: ctl(`
    text-headline-large 
    font-poppins-bold
  `),
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
      font-poppins-semi
    `),
  },
  createBtn: {
    container: ctl(`
      w-full 
      text-label-medium 
      bg-han-blue 
      py-[17px]
    `),
  },
  signInParagraph: ctl(`
    text-body-medium 
    text-black 
    opacity-[.8]
  `),
  policyParagraph: ctl(`
    mt-[16px] 
    text-body-small 
    text-black/[.4]
  `),
  policySpan: 'text-han-blue',
  formWrapper: 'mt-[56px]'
};