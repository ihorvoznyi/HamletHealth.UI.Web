import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between 
    mb-[20px]
  `),
  title: ctl(`
    mb-[4px] 
    fs20RobotoMedium
  `),
  subtitle: 'fs14RobotoRegular',
  filter: {
    container: 'flex items-center',
    item: ctl(`
      px-[8px] 
      py-[6px]
      cursor-pointer 
      border
      rounded-[16px]
      fs14Medium
    `),
    active: 'border-black bg-[#F6F6F6]',
    inactive: 'border-white'
  },
};