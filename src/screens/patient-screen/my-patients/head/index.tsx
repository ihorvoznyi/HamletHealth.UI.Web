import Search from '@components/ui/search';
import Sort from './sort';
import { classes } from './index.tailwind';

const Head = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h2 className={classes.title}>My patients</h2>
        <span className={classes.count}>(167)</span>
      </div>

      <div className={classes.filterContainer}>
        <Sort />
        <Search
          placeholder="Search patients, diagnosis, more"
          styles={classes.search}
          isCloseIcon={false}
        />
      </div>
    </div>
  );
};

export default Head;
