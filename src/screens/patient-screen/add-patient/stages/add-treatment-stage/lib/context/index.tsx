import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface ContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isPlanDefined: boolean;
  setIsPlanDefined: (isOpen: boolean) => void;
}

const TreatmentPlanStageContext = createContext<ContextType | undefined>(undefined);

export const TreatmentPlanStageContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlanDefined, setIsPlanDefined] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
    isPlanDefined,
    setIsPlanDefined,
  };

  return (
    <TreatmentPlanStageContext.Provider value={value}>
      <div className="">
        {children}
      </div>
    </TreatmentPlanStageContext.Provider>
  );
};

export const useTreatmentPlanStageContext = () => {
  const ctx = useContext(TreatmentPlanStageContext);
  if (!ctx) {
    throw new Error('');
  }
  return ctx;
};