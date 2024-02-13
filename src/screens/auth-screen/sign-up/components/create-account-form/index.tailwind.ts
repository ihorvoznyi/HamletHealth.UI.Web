import ctl from '@netlify/classnames-template-literals';

export const classes = {
  title: 'fs32Bold',
  container: ctl(`
    flex
    flex-col
    justify-between
    flex-[50%]
    text-center
    pt-[136px]
    px-[120px]
    pb-[56px]
  `),
  form: ctl(`
    grid
    grid-cols-2
    gap-x-[19px]
    gap-y-[20px]
    my-[40px]
  `),
  gridWideInput: {
    container: 'col-span-2'
  },
  createBtn: ctl(`
    w-full
    text-white
    col-span-2
    mt-[20px]
    bg-han-blue
    py-[16px]
    fs12SemiBold
    uppercase
    rounded-[4px]
  `),
};