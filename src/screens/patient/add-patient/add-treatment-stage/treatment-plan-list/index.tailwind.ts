import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-[300px]
    text-left
    font-roboto-400
  `),
  head: 'mb-[20px]',
  list: 'mt-[5px] space-y-[5px]',
};
