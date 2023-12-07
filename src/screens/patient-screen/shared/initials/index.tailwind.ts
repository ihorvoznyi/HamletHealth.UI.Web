import ctl from '@netlify/classnames-template-literals';

export const classes = {
container: ctl(`
  flex 
  items-center 
  gap-[16px] 
  col-span-3 
  fs18SemiBold
`),
initials: ctl(`
  w-[40px] 
  h-[40px] 

  flex items-center 
  justify-center 
  
  bg-han-blue 
  rounded-[50%] 
  text-white 
  fs14SemiBold
`),
};
