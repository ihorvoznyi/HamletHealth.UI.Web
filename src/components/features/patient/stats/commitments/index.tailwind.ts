import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    w-full
    pl-10
    mt-4
    space-y-4
  `),
  scrollContainer: ctl(`
    relative
    rounded-md
    border
    border-r-[0]
    rounded-tr-[0]
    rounded-br-[0]
    border-black/[.40]
    p-5
    overflow-x-auto
  `),
  card: ctl(`
    relative
    w-full
  `),
};
