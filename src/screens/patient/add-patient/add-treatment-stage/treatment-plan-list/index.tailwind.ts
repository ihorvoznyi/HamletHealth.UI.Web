import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex
    flex-col
    justify-between
    w-[300px]
    text-left
    font-roboto-400
  `),
  head: 'mb-[20px]',
  list: 'mt-[5px] space-y-[5px] flex-1',
  emptyMessage: {
    container: ctl(`
      flex 
      flex-1
      items-center 
      justify-center 
      border 
      border-black/[.10] 
      rounded-[4px]
    `),
    text: 'fs20RobotoMedium',
  }, 
};
