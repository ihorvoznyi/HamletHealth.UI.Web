import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: {
    base: ctl(`
      relative
      border 
      border-black/[.12]
      rounded-[4px]
      duration-200
      flex 
      items-center 
      justify-between
    `),
    focus: 'border-han-blue'
  },
  label: {
    base: ctl(`
      absolute 
      transition-all
      ease-out
      duration-200
      px-[3px] 
      left-3
      bg-white
      fs14Regular
      whitespace-nowrap
    `),
    active: ctl(`
      -top-[10px] 
      z-[100] 
      text-han-blue 
      cursor-text
    `),
    inactive: ctl(`
      transform 
      top-1/2 
      -translate-y-1/2 
      text-black/[.12]
    `),
    unfocused: 'text-black/[.12]'
  },
  icon: ctl(`
    absolute
    right-[10px]
    cursor-pointer
  `),
};
