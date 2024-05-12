import { FC, useState } from 'react';

import CloseSvg from '@components/ui/svg/CloseSvg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

interface FilterItemProps {
  id: string
  text: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const FilterItem: FC<FilterItemProps> = ({ id, text, isSelected: value, onSelect }) => {
  const [isSelected, setIsSelected] = useState(value);

  const handleSelect = () => {
    setIsSelected(prev => !prev);
    onSelect(id);
  };

  return (
    <div className={cn(classes.container, isSelected && classes.active)} onClick={handleSelect}>
      <p className={classes.text}>{text}</p>
      {isSelected ? <CloseSvg className={classes.closeIcon} /> : null}
    </div>
  );
};

export default FilterItem;
