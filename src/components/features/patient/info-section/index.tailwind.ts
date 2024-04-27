import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    px-[80px] 
    pt-[40px]
    pb-[30px]
    space-y-[50px]
  `),
  avatar: ctl(`
    w-[116px] 
    h-[116px] 
    fs26Bold
  `),
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
  editIcon: 'w-[20px]',
  content: 'flex items-center',
  divider: 'h-[188px]'
};
