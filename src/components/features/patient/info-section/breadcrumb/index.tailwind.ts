import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    flex 
    items-center 
    justify-between
  `),
  backBtn: { container: 'border-none' },
  connectBtn: {
    container: 'border-han-blue text-han-blue',
  }
};
