import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between
  `),
  head: ctl(`
    flex 
    items-end 
    gap-[16px]
  `),
  title: 'fs26Bold',
  count: 'fs14Regular text-black/[.40]',
  filterContainer: 'flex gap-[24px]',
  search: { 
    container: ctl(`
      min-w-[320px] 
      shrink-[1] 
      px-[16px] 
      gap-[12px] 
      border-black/[.12]
    `),
    input: ctl(`
      placeholder:text-black/[.40] 
      placeholder:fs14Regular 
      py-[12px] 
      fs14Regular
    `),
    searchIcon: 'fill-black/[.40] m-0'
  },
};
