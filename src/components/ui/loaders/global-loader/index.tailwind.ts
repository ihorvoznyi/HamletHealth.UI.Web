import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    absolute 
    inset-0
    overflow-hidden
    z-[99999999]
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
