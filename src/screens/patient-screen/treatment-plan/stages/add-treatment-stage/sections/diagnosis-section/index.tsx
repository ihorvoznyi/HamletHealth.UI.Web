import React, { useState } from 'react';

import Search from '@components/ui/search';
import DiagnosisItem from './diagnosis-item';

import { useAppSelector } from '@shared/model';

import { IDiagnosisStateType, selectActiveDiagnosisId, selectDiagnosis } from '@entities/treatment-plan';

import { classes } from './index.tailwind';
import { classes as commonClasses } from '../../index.tailwind';

const Diagnosis: React.FC<{ diagnosis?: Pick<IDiagnosisStateType, 'id'| 'name'>[] }> = () => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const activeDiagnosisId = useAppSelector(selectActiveDiagnosisId);
  const diagnosis = useAppSelector(state => selectDiagnosis(state, { searchTerm }));

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h4 className={commonClasses.title}>Diagnosis</h4>
        <p className={commonClasses.subtitle}>All diagnosis</p>
      </div>

      <div>
        <Search onChange={setSearchTerm} />
        <ul className={commonClasses.list}>
          {diagnosis.map(item => (
            <DiagnosisItem 
              key={item.name} 
              id={item.id} 
              name={item.name} 
              isActive={item.id === activeDiagnosisId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Diagnosis;