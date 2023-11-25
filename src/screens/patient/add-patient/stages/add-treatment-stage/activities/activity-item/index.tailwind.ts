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
    fs16Regular
    text-black
  `),
  name: 'font-roboto-500',
  type: 'fs13RobotoRegular',
  btn: {
    container: ctl(`
      border-none 
      gap-[2px]  
      fs15Regular
      normal-case
    `),
  },
  icon: {
    width: 'w-[18px]',
    color: '#4366C5'
  }
};