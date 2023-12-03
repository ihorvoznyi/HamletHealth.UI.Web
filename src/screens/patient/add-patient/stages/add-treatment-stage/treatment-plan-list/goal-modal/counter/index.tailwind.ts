import ctl from '@netlify/classnames-template-literals';

export const classes = {
  conainer: 'space-y-[8px]',
  paragraph: 'uppercase fs14Medium',
  btn: {
    container: ctl(`
      bg-cultured-secondary 
      text-black 
      p-[10px] 
      w-[40px] 
      fs20RobotoRegular
    `),
  },
  counterContainer: ctl(`
    flex 
    justify-center
    gap-[8px] 
  `),
  inputContainer: ctl(`
    text-center 
    rounded-[4px] 
    p-[10px] 
    w-[60px] 
    border 
    border-sonic-silver
  `),
  input: ctl(`
    max-w-[60px] 
    w-[24px] 
    fs20RobotoRegular
  `),
};
