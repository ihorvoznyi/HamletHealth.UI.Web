import ctl from '@netlify/classnames-template-literals';

const arrowStyle = ctl(`
  flex 
  items-center 
  justify-center

  absolute 
  top-1/2 
  -translate-y-1/2 

  rounded-[50%] 
  bg-white 
  p-[10px]

  shadow-gray
`);

export const classes = {
  container: ctl(`
    relative
    w-full
    overflow-hidden
  `),
  rightArrowBtn: ctl(`
    ${arrowStyle}
    right-[25px]
  `),
  leftArrowBtn: ctl(`
    ${arrowStyle}
    left-[25px]
  `),
  rightArrowIcon: 'fill-black',
  leftArrowIcon: 'fill-black rotate-180',
  scrollContainer: ctl(`
    flex 
    w-full 
    overflow-x-hidden
    py-[20px]
    px-[24px]
    gap-[24px]
  `),
};