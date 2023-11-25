import ctl from '@netlify/classnames-template-literals';

export const classes = {
  container: 'mt-[125px] mb-[40px]',
  stage: {
    base: ctl(`
      max-w-[160px] 
      text-center 
      fs10SemiBold 
      text-black/[0.32] 
      uppercase
    `),
    filled: 'text-green',
    checked: 'text-han-blue',
    unchecked: 'text-black/[0.32]',
  },
  stageBarContainer: ctl(`
    flex
    justify-center
    items-center
    min-h-[10px]
    max-w-[320px]
    mx-auto
    overflow-hidden
    mb-[17px]
    relative
  `),
  contentContainer: ctl(`
    flex 
    justify-center 
    gap-[16px]
  `),
  circle: {
    base: ctl(`
      absolute
      top-[1/2]
      w-[10px]
      h-[10px]
      rounded-[50%]
      bg-white
    `),
    active: 'bg-han-blue',
    checked: 'border-han-blue border-[2px]',
    filled: 'bg-green',
    unchecked: 'border-[2px] border-black/[0.32]',

    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2',
  },
};
