import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'space-y-[8px]',
  paragraph: 'uppercase fs14Medium',
  textarea: {
    container: ctl(`
      w-full 
      h-[200px]

      flex 
      flex-col
      items-center 
      justify-between

      relative

      border 
      border-black/[.12]
      rounded-[4px]
      duration-200
    `),
    input: ctl(`
      w-full
      h-full
      px-[20px]
      py-[15px]
    `),
  },
  label: {
    base: ctl(`
      absolute 
      top-[15.5px] 
      left-[20px]
      z-[0]
      text-[16px] 
      leading-[24px] 
      tracking-[0.5px] 
      font-poppins-400 
      opacity-[0.8]
      cursor-text
    `),
    span: 'text-[13px]',
    hidden: 'hidden'
  },
  btn: {
    container: ctl(`
      border-none
      text-royal-purple
      fs14RobotoMedium
      px-0
    `),
  },
  btnsContainer: ctl(`
    w-full 
    flex 
    justify-end
    gap-[16px]
    px-[20px]
  `),
  icon: ctl(`
    absolute 
    right-[17px]
    cursor-pointer
  `),
};
