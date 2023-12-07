import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    relative
    border
    border-black/[.12]
    rounded-[4px]
    duration-200
    flex 
    items-center 
    justify-between
    relative
    cursor-pointer
  `),
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
    unfocused: 'text-black/[.12]',
  },
  drowdown: ctl(`
    absolute 
    w-full 
    rounded-[4px] 
    left-0 
    border 
    text-left
    top-[calc(100%+10px)]
    z-[100]
    bg-white
    border-black/[.12]
    text-black/[.88]
  `),
  dropdownContainer: 'w-full fs14Regular',
  item: ctl(`
    px-4
    py-3
    cursor-pointer
    first:rounded-t-[4px]
    last:rounded-b-[4px]
    hover:bg-black/[.12]
  `),
  input: 'cursor-pointer w-full px-4 py-3',
  icon: 'absolute right-[17px]',
};