import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    flex-[1] 
    flex-col 
    gap-[24px] 
    ml-[120px]
  `),
  columns: 'flex justify-between',
  column: ctl(`
    flex 
    flex-col
    flex-wrap 
    space-y-[8px] 
  `),
  colTitle: 'fs14Regular text-black/[.40]',
  colText: 'fs14Regular opacity-[.80] max-w-[140px]',
};
