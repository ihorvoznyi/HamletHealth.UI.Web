import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    absolute 
    inset-0
    z-[100]
    bg-black/[.30] 
  `),
  loader: {
    loader: ctl(`
    absolute 
    top-1/2
    left-1/2 
    -translate-x-1/2 
    -translate-y-1/2
  `)
  },
};
