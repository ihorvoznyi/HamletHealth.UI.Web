import React from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from '@shared/model';
import { treatmentPlanActions } from '@entities/patient';

import { classes } from './index.tailwind';
import { cn } from '@utils/style.util';

const DiagnosisItem: React.FC<{ id: string; name: string; isActive?: boolean; }> = ({ id, name, isActive = false }) => {
  const dispatch = useAppDispatch();
  const { setActiveDiagnosis } = bindActionCreators(treatmentPlanActions, dispatch);

  return (
    <li 
      className={cn(
        classes.item, 
        isActive && classes.active)} 
      onClick={() => setActiveDiagnosis(id)}>{name}</li>
  );
};

export default DiagnosisItem;
