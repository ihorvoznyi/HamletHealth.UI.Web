import { FC, MouseEvent, useState } from 'react';

import CloseSvg from '@components/ui/svg/CloseSvg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface FilterItemProps {
  text: string; 
  isSelected: boolean;
  onSelect: () => void;
}

const FilterItem: FC<FilterItemProps> = ({ text, isSelected: value, onSelect }) => {
  const [isSelected, setIsSelected] = useState(value);

  const handleSelect = () => {
    setIsSelected(true);
    onSelect();
  };

  const handleUnselect = (event: MouseEvent) => {
    event.stopPropagation();
    setIsSelected(false);
  };

  return (
    <div className={cn(classes.container, isSelected && classes.active)} onClick={handleSelect}>
      <p className={classes.text}>{text}</p>
      {isSelected ? (
        <button onClick={handleUnselect}>
          <CloseSvg className={classes.closeIcon} />
        </button>
      ) : null}
    </div>
  );
};

export default FilterItem;
