import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'space-y-[16px]',
  paragraph: 'fs16Regular',
  btnsContainer: 'flex gap-[5px]',
  btn: {
    base: ctl(`
      bg-cultured-secondary 
      text-black 
      fs14Regular 
      normal-case 
      px-[8px] 
      py-[4px]
    `),
    active: 'bg-dark-charcoal text-white'
  }
};
