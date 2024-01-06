import { useState } from 'react';

import Stats from './stats';
import Entries from './entries';
import Tabs, { TabEnum } from './tabs';
import InfoSection from './info-section';

import { classes } from './index.tailwind';

const Patient = () => {
  const [activeTab, setActiveTab] = useState(TabEnum.STATS);

  const handleSwitch = (tab: TabEnum) => setActiveTab(tab);

  return (
    <div className={classes.container}>
      <InfoSection />

      <div className={classes.tabsContainer}>
        <Tabs value={activeTab} onSwitch={handleSwitch} />
        {activeTab === TabEnum.ENTRIES ? <Entries /> : <Stats />}
      </div>
    </div>
  );
};

export default Patient;