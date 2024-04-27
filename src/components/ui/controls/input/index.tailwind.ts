import ctl from '@netlify/classnames-template-literals';

export const classes = {
  input: ctl(`
    relative
    z-5
    w-full
    px-4
    py-3
    placeholder:fs14SemiBold
    placeholder:text-black/[.12]
    text-black/[.88]
  `),
};