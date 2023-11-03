import { CircleCrossSvg, SearchSvg } from '@ui/icons';
import { classes } from './index.tailwind';

const Search = () => {
  return (
    <div className={classes.container}>
      <SearchSvg className={classes.searchIcon} />
      <input placeholder="Search" className={classes.input} />
      <CircleCrossSvg className={classes.crossIcon} />
    </div>
  );
};

export default Search;
