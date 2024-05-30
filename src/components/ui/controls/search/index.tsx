import { ChangeEvent, FC, useState } from 'react';

import { CircleCrossSvg, SearchSvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { SearchClasses } from './index.interfaces';

interface PropsType {
  styles?: Partial<SearchClasses>;
  placeholder?: string;
  isCloseIcon?: boolean;

  onChange: (statement: string) => void;
}

const Search: FC<PropsType> = ({ styles, onChange, placeholder = 'Search', isCloseIcon = true }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const statement = event?.target.value;

    setValue(statement);
    onChange(statement);
  };

  const clearValue = () => {
    setValue('');
    onChange('');
  };

  return (
    <div className={cn(classes.container, styles?.container)}>
      <SearchSvg className={cn(classes.searchIcon, styles?.searchIcon)} />
      <input
        placeholder={placeholder}
        className={cn(classes.input, styles?.input)}
        value={value}
        onChange={handleChange}
      />
      {isCloseIcon ? <CircleCrossSvg onClick={clearValue} className={classes.crossIcon} /> : null}
    </div>
  );
};

export default Search;
