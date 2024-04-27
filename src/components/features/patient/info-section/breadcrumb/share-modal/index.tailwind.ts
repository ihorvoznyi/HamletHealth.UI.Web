import ctl from '@netlify/classnames-template-literals';

export const classes = {
  modal: { container: 'rounded-[4px]' },
  form: 'space-y-[12px] mb-[24px]',
  title: ctl(`
    text-center 
    fs26Bold 
    mb-[40px]
  `),
  assignBtn: { container: 'border-none text-han-blue' },
  shareBtn: { 
    container: ctl(`
      w-full 
      py-[16px] 
      mt-[40px]
    `),
  },
  plusIconColor: '#4366C5',
  fieldContainer: 'flex gap-[16px]',
  select: { container: 'flex-3' }, 
  input: { container: 'flex-1' }, 
};