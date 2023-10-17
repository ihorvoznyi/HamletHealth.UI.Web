import ctl from '@netlify/classnames-template-literals';

export const containerStyle = ctl(`
  relative
  min-w-[250px]
  border 
  border-black/[.12]
  rounded-[4px]
  duration-200
  flex 
  items-center 
  justify-between
`);
