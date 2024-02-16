import { FC, useState } from 'react';

import Menu from '../item-menu';
import GoalModal from '../goal-modal';
import { MoreHorizontalSvg } from '@components/ui/svg';

import { useClickOutside } from '@hooks/useClickOutside';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { getTreatmentIcon } from './index.helper';

interface PropsType {
  text: string;
  type: 'sleep' | 'movie' | 'medicine';
}

const TreatmentItem: FC<PropsType> = ({ text, type }) => {
  const ref = useClickOutside<HTMLLIElement>(() => setIsMenuOpen(false));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDefine = () => {
    setShowModal(true);
  };
  
  return (
    <>
      <li ref={ref} className={classes.item}>
        <div className={classes.content}>
          {getTreatmentIcon(type)}
          <p className={classes.text}>{text}</p>
        </div>

        <div className={cn(classes.dotsIcon, isMenuOpen && 'bg-[#e5e5e5]')}>
          <MoreHorizontalSvg 
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(prev => !prev)} 
          />

          {isMenuOpen && <Menu onDelete={() => {}} onDefine={handleDefine} onEdit={() => {}} />}
        </div>
      </li>

      {showModal ? <GoalModal onClose={() => setShowModal(false)} /> : null}
    </>
  );
};

export default TreatmentItem;