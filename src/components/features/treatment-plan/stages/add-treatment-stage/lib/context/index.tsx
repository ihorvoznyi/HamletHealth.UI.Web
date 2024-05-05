import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface ContextType {
  isPlanDefined: boolean;
  showDefineModal: boolean;
  showTreatmentCreationModal: boolean;

  setIsPlanDefined: (isOpen: boolean) => void;
  openTreatmentPlanCreationModal: () => void;
  openDefinePlanModal: () => void;
  closeDefinePlanModal: () => void;
  closeTreatmentPlanCreationModal: () => void;
}

const TreatmentPlanStageContext = createContext<ContextType | undefined>(undefined);

export const TreatmentPlanStageContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showTreatmentCreationModal, setShowTreatmentCreationModal] = useState(false);
  const [showDefineModal, setShowDefineModal] = useState(false); 
  const [isPlanDefined, setIsPlanDefined] = useState(false);

  const openTreatmentPlanCreationModal = () => {
    setShowTreatmentCreationModal(true);
  };

  const closeTreatmentPlanCreationModal = () => {
    setShowTreatmentCreationModal(false);
  };

  const openDefinePlanModal = () => {
    setShowDefineModal(true);
  };

  const closeDefinePlanModal = () => {
    setShowDefineModal(false);
  };

  const value = {
    isPlanDefined,
    showDefineModal,
    showTreatmentCreationModal,
    setIsPlanDefined,
    openDefinePlanModal,
    openTreatmentPlanCreationModal,
    closeDefinePlanModal,
    closeTreatmentPlanCreationModal,
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