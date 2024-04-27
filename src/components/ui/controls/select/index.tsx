import { FC, useEffect, useState } from 'react';

import OptionEl from './OptionEl';
import { DropDownSvg } from '@components/ui/svg';

import { useClickOutside } from '@hooks/useClickOutside';

import { cn } from '@utils/style.util';

import { Option } from './index.interfaces';

import { classes } from './index.tailwind';

interface PropsType {
  label: string;
  error?: string;

  styles?: {
    dropdownContainer?: string;
    label?: string;
    container?: string;
  };

  value: string;
  onChange: (value: string | number) => void;

  isValid?: boolean;
  options: Option[];
}

const Select: FC<PropsType> = ({ label, styles, options, onChange, value, error }) => {
  const getValue = (value: string) => {
    const option = options.find(o => o.value === value || o.label === value);
  
    return option;
  };

  const selectedOption = getValue(value);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsFocused(false));

  const isLabelActive = isFocused || !!selectedOption;

  const handleSelect = (option: Option) => {
    onChange(option.value);
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
          isFocused && 'border-han-blue',
          styles?.container
        )}
    >
      {label && (
        <label
          className={cn(
            classes.label.base,
            isLabelActive ? classes.label.active : classes.label.inactive,
            !isFocused && classes.label.unfocused,
            styles?.label)}
        >
          {label}
        </label>
      )}
      
      <div className={cn(classes.dropdownContainer, styles?.dropdownContainer)}>
        <input 
          className={classes.input}
          value={selectedOption?.label || ''}
          onChange={() => {}}
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
      
      <DropDownSvg className={classes.icon} />
      {error ? <span className={classes.errorMessage}>{error}</span> : null}
    </div>
  );
};

export default Select;
