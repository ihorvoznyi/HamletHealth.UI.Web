import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: ctl(`
    relative 
    flex 
    items-center 
    justify-center 
    h-[calc(100vh-80px)]
  `),
  mainImage: ctl(`
    h-[100vh] 
    w-[85%] 
    absolute 
    top-[-80px] 
    -z-[1] 
    left-1/2 
    -translate-x-1/2
    select-none
  `),
  leftFlower: ctl(`
    absolute 
    -z-[2] 
    top-[25px] 
    left-[6%]
    select-none
  `),
  rightFlower: ctl(`
    absolute 
    right-[7%] 
    bottom-[14%] 
    w-[440px] 
    h-[380px]
    select-none
  `),
  contentContainer: ctl(`
    flex 
    flex-col 
    mt-[-80px] 
    max-w-[400px] 
    text-center
  `),
  title: ctl(`
    text-headline-large 
    font-poppins-semi 
    text-[26px] 
    leading-[32px]
  `),
  paragraph: ctl(`
    text-body-medium 
    mt-[24px] 
    mb-[56px]
  `),
  button: {
    container: 'self-center font-poppins-semi'
  },
};
