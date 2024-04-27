import ctl from '@netlify/classnames-template-literals';

export const classes = {
	container: ctl(`
    w-[56px] 
    h-[56px] 

    flex 
    items-center 
    justify-center 
    
    rounded-[50%]

    p-[16px] 
    bg-[#A7E35A]/[.24]
  `),
};
