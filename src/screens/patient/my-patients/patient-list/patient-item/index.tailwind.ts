import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    shadow-gray
    py-[16px] 
    px-[32px] 
    rounded-[4px]

    grid
    grid-cols-12
    items-center
    text-black

    cursor-pointer
  `),
  nameContainer: ctl(`
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
  birthDate: 'col-span-2 fs14Regular',
  gender: 'col-span-1 fs14Regular',
  description: 'col-span-6 fs14Regular',
};
