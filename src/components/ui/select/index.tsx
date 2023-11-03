import { FC, useEffect, useState } from 'react';

import OptionEl from './OptionEl';
import { CheckSvg, DropDownSvg } from '../icons';

import { cn } from '@utils/style.util';
import useClickOutside from '@hooks/useClickOutside';

import { Option } from './index.interfaces';
import { classes } from './index.tailwind';

interface PropsType {
  label: string;

  styles?: {
    dropdownContainer?: string;
    label?: string;
    container?: string;
  };

  isValid?: boolean;
  options: Option[];
}

const Select: FC<PropsType> = ({ label, styles, options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsFocused(false));

  const isLabelActive = isFocused || !!selectedOption;
  const isValid = false && !isFocused;

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption) {
      setIsFocused(false);
    }
  }, [selectedOption]);
  
  return (
    <div 
      ref={ref} 
      onClick={() => setIsFocused(true)} 
      className={cn(
          classes.container,
          'relative',
          isFocused && 'border-han-blue',
          styles?.container
        )}
    >
      {label && (
        <label
          className={cn(
            classes.label.base, 
            {
              [classes.label.active]: isLabelActive,
              [classes.label.inactive]: !isLabelActive,
              [classes.label.unfocused]: !isFocused,
            },
            styles?.label)}
        >
          {label}
        </label>
      )}
      
      <div className={cn(classes.dropdownContainer, styles?.dropdownContainer)}>
        <input 
          value={selectedOption?.label || ''}
          className={classes.input}
        />
        {isFocused && (
          <ul className={classes.drowdown}>
            {options.map(option => (
              <OptionEl
                key={option.value} 
                option={option} 
                onSelect={handleSelect} 
              />
            ))}
          </ul>
        )}
      </div>

      
      {isValid ? <CheckSvg className={classes.icon} /> : <DropDownSvg className={classes.icon} />}
    </div>
  );
};

export default Select;
