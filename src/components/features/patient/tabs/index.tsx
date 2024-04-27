import { FC } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export enum TabEnum {
  STATS = 'Stats',
  ENTRIES = 'Entries'
}

interface PropsType {
  value: TabEnum;
  onSwitch: (tab: TabEnum) => void;
}

const Tabs: FC<PropsType> = ({ value, onSwitch }) => {
  const handleSwitch = (tab: TabEnum) => {
    onSwitch(tab);
  };

  return (
    <div className={classes.container}>
      {Object.values(TabEnum).map(tab => (
        <a 
          key={tab}
          onClick={() => handleSwitch(tab)} 
          className={cn(
            classes.tab.base, 
            value === tab && classes.tab.active
          )}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default Tabs;