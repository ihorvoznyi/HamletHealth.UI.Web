import ctl from '@netlify/classnames-template-literals';
import { cn } from '@utils/style.util';

const btnContentClasses = ctl(`
  flex 
  items-center 
  w-full 
  gap-[6px]
`);

export const classes = {
  container: ctl(`
    w-[170px] 
    items-start 

    absolute
    top-[calc(100%+2px)]
    right-0 
    z-[10]

    py-[12px] 
    bg-white 
    shadow-gray
  `),
  btn: {
    container: ctl(`
      w-full 
      border-none 
      px-[12px] 
      py-[8px] 
      gap-[2px]

      hover:bg-han-blue/[.10]
    `)
  },
  deleteBtnContent: cn(btnContentClasses, 'text-red'),
  defineBtnContent: cn(btnContentClasses, 'text-green'),
  editBtnContent: cn(btnContentClasses, 'text-black'),
};