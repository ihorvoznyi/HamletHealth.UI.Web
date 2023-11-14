import ctl from '@netlify/classnames-template-literals';
import { cn } from '@utils/style.util';

export const classes = {
  title: ctl(`
    fs20RobotoMedium
    mb-[4px] 
  `),
  subtitle: 'fs14RobotoRegular',
  list: ctl(`
    mt-[5px]
    max-h-[330px]
    overflow-auto
  `),
  sections: 'flex gap-[24px] mt-[50px]',
  btnsContainer: ctl(`
    flex 
    gap-[16px] 
    mt-[124px] 
    justify-center
  `),
  defineBtn: {
    container: ctl(`
      mt-[20px] 
      float-right 
      bg-white 
      purple-gradient 
      text-royal-purple 
      rounded-[4px] 
      tracking-[1.25px] 
      leading-[16px] 
      font-roboto-500 
      w-[300px] 
      py-[14px] 
      px-[16px]
    `),
  },
  processBtn: {
    base: 'w-[208px]',
    disabled: 'text-eerie-black bg-[#d2dbd5]'
  },
};
