import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between
  `),
  supportersContainer: ctl(`
    flex 
    items-center 
    gap-[60px]
  `),
  grayParagraph: ctl(`
    fs14Regular 
    opacity-[.80] 
    text-black/[.40]
  `),
  list: 'flex gap-[30px]'
};
