import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    min-w-[337px]
    flex 
    flex-col
    rounded-[4px] 
    gap-[10px] 
    p-[15px] 
    bg-white 
    shadow-gray
  `),
  time: 'text-center fs14SemiBold',
  moodText: ctl(`
    fs14Regular 
    tracking-[0.25px] 
    mb-[10px]
  `),
  btn: {
    container: ctl(`
      w-[50%] 

      justify-start 
      gap-[12px] 

      text-[12px]
      text-black 
      bg-black/[0.08] 

      px-[12px] 
      py-[4px] 

      normal-case 
    `),
  },
};
