import { FC } from 'react';
import { Option } from './index.interfaces';
import { classes } from './index.tailwind';

interface PropsType {
  option: Option;
  onSelect: (option: Option) => void;
}

const OptionEl: FC<PropsType> = ({ option, onSelect }) => {
  const handleClick = (option: Option) => {
    onSelect(option);
  };

  return (
    <li 
      className={classes.item}
      onClick={() => handleClick(option)}
      data-select-id={`select-option-${option.value}`}
    >
      {option.label}
    </li>
  );
};

export default OptionEl;