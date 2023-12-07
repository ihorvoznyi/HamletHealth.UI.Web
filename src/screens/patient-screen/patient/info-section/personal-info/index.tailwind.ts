import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    gap-[40px] 
    mr-[120px]
  `),
  nameContainer: ctl(`
    flex
    items-center 
    gap-[32px] 
    mb-[12px]
  `),
  avatar: ctl(`
    w-[116px] 
    h-[116px] 
    fs26Bold
    bg-[#FFA553]
  `),
  title: 'fs26Bold',
  paragraph: 'fs14Regular',
  assignBtn: {
    container: ctl(`
      mb-[10px] 
      mt-[13px] 
      w-[197px]
    `),
  },
  addBtn: {
    container: 'w-[197px]'
  },
  editBtn: ctl(`
    w-[32px] 
    h-[32px] 

    flex 
    items-center 
    justify-center

    p-[4px] 
    bg-black/[0.08] 
    rounded-[50%] 
  `),
  editIcon: 'w-[20px]'
};
