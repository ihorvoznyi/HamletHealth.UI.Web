import ctl from '@netlify/classnames-template-literals';

export const classes = {
  modal: { container: 'w-[400px]' },
  title: ctl(`
    mb-[24px]
    text-center 
    fs20RobotoMedium 
  `),
};
