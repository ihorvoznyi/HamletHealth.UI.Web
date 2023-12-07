import ctl from '@netlify/classnames-template-literals';

export const classes = {
  item: ctl(`
    flex 
    items-center 
    justify-between

    py-[6px] 
    pr-[4px] 
    pl-[10px]

    border 
    border-black/[.12] 
    rounded-[4px]

    relative
  `),
  content: 'flex items-center gap-[4px]',
  text: 'fs14Regular',
  dotsIcon: 'p-[4px] rounded-[16px] relative',

};
