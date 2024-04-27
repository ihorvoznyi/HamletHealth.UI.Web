import ctl from '@netlify/classnames-template-literals';

// export const classes = {
//   wrapper: 'flex',
//   container: ctl(`
//     flex 
//     flex-col
//     flex-[50%] 
//     w-full 
//     h-screen 
//     items-center 
//     text-center
//     pt-[120px] 
//     bg-cultured-primary 
//   `),
//   img: ctl(`
//     mx-auto 
//     px-[38px] 
//     py-[22px] 
//     mt-[56px]
//   `),
//   contentContainer: ctl(`
//     max-w-[400px] 
//     mt-[50px] 
//     text-center
//   `),
//   title: ctl(`
//     mb-[24px] 
//     fs32Bold
//   `),
//   paragraph: ctl(`
//     fs14Regular
//     opacity-[.8] 
//   `),
// };

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
  formWrapper: 'mt-[56px]',
  signInContainer: ctl(`
    flex 
    items-center 
    justify-center 
    gap-[8px]
  `),
  signInBtn: { 
    container: ctl(`
      text-han-blue
      font-poppins-600
    `),
  },
  signInParagraph: ctl(`
    fs14Regular
    text-black 
    opacity-[.8]
  `),
};