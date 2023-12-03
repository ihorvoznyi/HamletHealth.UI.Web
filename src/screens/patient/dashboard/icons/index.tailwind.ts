import ctl from '@netlify/classnames-template-literals';

const base = ctl(`
  w-[56px] 
  h-[56px] 

  flex 
  items-center 
  justify-center 
  
  rounded-[50%]
`);

export const classes = {
  patientIcon: ctl(`
    ${base}
    p-[16px] 
    bg-[#A7E35A]/[.24]
  `),
  settingsIcon: ctl(`
    ${base}
    p-[10px]
    bg-[#F2D243]/[.24]
  `),
  contentIcon: ctl(`
    ${base}
    p-[10px]
    bg-[#FFA553]/[.24]
  `),
  errorIcon: ctl(`
    ${base}
    p-[10px]
    bg-[#EA94FF]/[.24]
  `),
};
