import ctl from '@netlify/classnames-template-literals';

export const labelUnfocusedStyle = 'text-black/[.12]';

export const labelActiveStyle = ctl(`
  -top-[10px] 
  z-[100] 
  text-han-blue 
  cursor-text
`);

export const labelInactiveStyle = ctl(`
  transform 
  top-1/2 
  -translate-y-1/2 
  text-black/[.12]
`);

export const classes = {
  container: ctl(`
    relative
    min-w-[250px]
    border 
    border-black/[.12]
    rounded-[4px]
    duration-200
    flex 
    items-center 
    justify-between
  `),
  label: ctl(`
    absolute 
    transition-all
    ease-out
    duration-200
    px-[3px] 
    left-3
    bg-white
    fs14Regular
  `),
  input: ctl(`
    relative
    z-5
    w-full
    px-4
    py-3
    fs14Regular
    placeholder:fs14SemiBold
    placeholder:text-black/[.12]
    text-black/[.88]
  `),
  icon: ctl(`
    absolute 
    right-[17px]
    cursor-pointer
  `),
};