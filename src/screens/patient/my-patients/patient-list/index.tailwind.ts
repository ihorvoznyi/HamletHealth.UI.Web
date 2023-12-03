import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'space-y-[40px] mt-[48px]',
  sectionName: ctl(`
    mb-[24px] 
    fs14SemiBold 
    text-black/[.40]
  `),
  list: 'space-y-[12px]'
};
