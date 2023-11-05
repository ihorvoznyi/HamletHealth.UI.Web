import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    justify-between 
    items-center 
    px-[20px] 
    py-[12px] 
    hover:bg-han-blue/[.10]
  `),
  contentContainer: ctl(`
    text-[16px] 
    tracking-[0.15px] 
    text-black
  `),
  name: 'font-roboto-500',
  type: ctl(`
    text-[13px] 
    tracking-[0.15px]
    font-roboto-400
  `),
  btn: {
    container: ctl(`
      border-none 
      gap-[2px] 
      text-[#000] 
      text-[15px] 
      normal-case
      tracking-[0.15px]
      leading-normal
    `),
  },
  icon: {
    width: 'w-[18px]',
    color: '#4366C5'
  }
};