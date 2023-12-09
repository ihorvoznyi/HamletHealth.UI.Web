import { FC } from 'react';

import { CircleCrossSvg, SearchSvg } from '@components/ui/svg';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';
import { SearchClasses } from './index.interfaces';

interface PropsType {
  styles?: Partial<SearchClasses>;
  placeholder?: string;
  isCloseIcon?: boolean;
}

const Search: FC<PropsType> = ({ styles, placeholder, isCloseIcon = true }) => {
  return (
    <div className={cn(classes.container, styles?.container)}>
      <SearchSvg className={cn(classes.searchIcon, styles?.searchIcon)} />
      <input placeholder={placeholder} className={cn(classes.input, styles?.input)} />
      {isCloseIcon ? <CircleCrossSvg className={classes.crossIcon} /> : null}
    </div>
  );
};

export default Search;
