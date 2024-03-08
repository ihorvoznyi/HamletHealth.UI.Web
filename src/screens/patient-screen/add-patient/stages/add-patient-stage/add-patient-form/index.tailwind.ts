import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    grid 
    grid-cols-2 
    gap-x-[32px] 
    gap-y-[26px]
    mt-[48px] 
    mb-[56px]
  `),
  wideInput: { container: 'col-span-2' },
  btnContainer: 'col-span-2',
  btn: ctl(`
    w-[300px] 
    mx-auto 
    px-[8px] 
    py-[14px] 
    self-center
    bg-green
    text-white
    rounded-[4px]
  `),
  disabled: ctl(`
    text-eerie-black/[.38]
    bg-light-silver
    border-eerie-black/[.12]
  `),
};