import { FC, useEffect } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '@shared/model';
import { patientActions, selectPatientKeyHealthIndicators, selectPatientSelection } from '@app/store/entities/patient';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

const IndicatorsFilter: FC = () => {
  const dispatch = useAppDispatch();
	const { setKeyHealthIndicator } = bindActionCreators(patientActions, dispatch);
	const { keyHealthIndicator } = useAppSelector(selectPatientSelection);
  
	const keyHealthIndicators = useAppSelector(selectPatientKeyHealthIndicators);

	const handleSelect = (id: string) => {
    if (id !== keyHealthIndicator) {
      setKeyHealthIndicator(id);
    }
	};

  useEffect(() => {
    if (keyHealthIndicators.length) {
      setKeyHealthIndicator(keyHealthIndicators[0].id ?? '');
    }
  }, [keyHealthIndicators]);

	return (
		<div>
			<p className={classes.paragraph}>Select key health indicator:</p>
			<ul className={classes.list}>
				{keyHealthIndicators.map(indicator => {
          const isSelected = keyHealthIndicator === indicator.id;
					return (
						<div
              key={indicator.id}
							className={cn(classes.item, isSelected && classes.active)}
							onClick={() => handleSelect(indicator.id)}
						>
							<p className={classes.text}>{indicator.name}</p>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default IndicatorsFilter;
