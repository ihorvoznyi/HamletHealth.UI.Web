import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between 
    mb-[20px]
  `),
  title: ctl(`
    text-[20px] 
    mb-[4px] 
    font-roboto-500 
    leading-[24px] 
    tracking-[0.15px]
  `),
  subtitle: 'text-body-medium font-roboto-400',
  filter: {
    container: 'flex items-center',
    item: ctl(`
      font-poppins-500 
      px-[8px] 
      py-[6px]
      cursor-pointer 
      border
      rounded-[16px]
      tracking-[0.15px]
      leading-[16px]
      text-[14px]
    `),
    active: 'border-black bg-[#F6F6F6]',
    inactive: 'border-white'
  },
};