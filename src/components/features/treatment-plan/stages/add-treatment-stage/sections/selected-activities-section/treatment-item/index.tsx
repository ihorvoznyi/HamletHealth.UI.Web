import { FC, useState } from 'react';

import Menu from '../item-menu';
import { MoreHorizontalSvg } from '@components/ui/svg';

import { useClickOutside } from '@hooks/useClickOutside';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { getTreatmentIcon } from './index.helper';
import { bindActionCreators } from '@reduxjs/toolkit';
import { treatmentPlanActions } from '@app/store/entities/treatment';
import { useAppDispatch } from '@shared/model';
import { useTreatmentPlanStageContext } from '../../../lib/context';

interface PropsType {
  id: string;
  text: string;
  icon: string;
  category: number;
}

const TreatmentItem: FC<PropsType> = ({ id, text, category }) => {
  const dispatch = useAppDispatch();
  const { 
    deleteSelectedActivityOrMedication: deleteTreatmentItem 
  } = bindActionCreators(treatmentPlanActions, dispatch);
  const { openDefinePlanModal } = useTreatmentPlanStageContext();

  const ref = useClickOutside<HTMLLIElement>(() => setIsMenuOpen(false));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <li ref={ref} className={classes.item}>
        <div className={classes.content}>
          {getTreatmentIcon('medicine')}
          <p className={classes.text}>{text}</p>
        </div>

        <div className={cn(classes.dotsIcon, isMenuOpen && 'bg-[#e5e5e5]')}>
          <MoreHorizontalSvg 
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(prev => !prev)} 
          />

          {isMenuOpen ? (
            <Menu 
              onEdit={() => {}} 
              onDefine={openDefinePlanModal}
              onDelete={() => deleteTreatmentItem(id)}
            />
          ) : null}
        </div>
      </li>
    </>
  );
};

export default TreatmentItem;