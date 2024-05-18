import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-full 
    px-[13px] 
    absolute 
    top-[calc(100%+15px)]
  `),
  line: ctl(`
    relative
    w-full 
    h-[1px] 
    bg-black 
    mb-[8px]

    before:absolute
    before:left-0
    before:top-1/2
    before:-translate-y-1/2
    before:rotate-45
    before:w-[4px]
    before:h-[4px]
    before:bg-black

    after:w-0 
    after:h-0
    after:absolute
    after:-right-[2px]
    after:top-1/2
    after:-translate-y-1/2
    after:border-t-[3px] 
    after:border-t-transparent
    after:border-l-[6px] 
    after:border-b-[3px] 
    after:border-b-transparent
  `),
  text: ctl(`
    overflow-hidden 
    whitespace-nowrap
    fs12Regular 
    text-center 
    text-ellipsis 
    tracking-[0.4px]
  `),
};
