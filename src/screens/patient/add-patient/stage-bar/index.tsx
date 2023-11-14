import { FC, useState } from "react";

type StageStatusType = 'finished' | 'active' | 'default';
type StagesType = [StageStatusType, StageStatusType, StageStatusType];

interface PropsType {
  stages: StagesType;
}

import React from 'react'

const DashedSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
      <path d="M0 1L166 1" stroke="black" stroke-opacity="0.32" stroke-dasharray="3 3"/>
    </svg>
  )
}

const StageBar: FC<PropsType> = ({ stages = ['default', 'default', 'default'] }) => {
  const [stageStatuses, setStageStatuses] = useState<StagesType>(stages);
  
  return (
    <div className="mt-[125px] mb-[40px]">
      {/* <div className="w-[320px] h-[1px] stroke-1 bg-black shrink-0" /> */}
      <div className="flex justify-center items-center min-h-[10px] max-w-[320px] mx-auto overflow-hidden mb-[17px] relative">
        <div className="absolute top-[1/2] left-0 w-[10px] h-[10px] rounded-[50%] bg-han-blue" />
        <div className="absolute top-[1/2] left-1/2 w-[10px] h-[10px] rounded-[50%] bg-han-blue" />
        <div className="absolute top-[1/2] right-0 w-[10px] h-[10px] rounded-[50%] bg-han-blue" />

        <DashedSvg />
        <DashedSvg />
      </div>
      <div className="flex justify-center gap-[16px]">
        <p className="max-w-[160px] text-center fs10SemiBold text-black/[0.32] uppercase">add Patient’s info</p>
        <p className="max-w-[160px] text-center fs10SemiBold text-black/[0.32] uppercase">add Tasks and activities</p>
        <p className="max-w-[160px] text-center fs10SemiBold text-black/[0.32] uppercase">add Supporters</p>
      </div>
    </div>
  );
};

export default StageBar;
