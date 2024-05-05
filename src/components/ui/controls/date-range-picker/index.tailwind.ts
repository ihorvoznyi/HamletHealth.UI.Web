import ctl from '@netlify/classnames-template-literals';

export const classes = {
  navArrow: ctl(`
    size-5 
    fill-black/[.5] 
    rounded-[50%] 
    transition-colors

    hover:bg-black/[.1] 
    hover:fill-black[.9]
  `),
  controls: ctl(`
    absolute 
    top-0 
    left-0 
    right-0 
    h-[48px] 
    flex 
    items-center 
    justify-between 
    px-6
  `),
};
