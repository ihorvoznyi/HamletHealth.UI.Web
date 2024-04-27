import { useState } from 'react';

import Tabs, { TabEnum } from '@components/features/patient/tabs';
import { PatientStats, PatientEntries, InfoSection } from '@components/features/patient';

import { classes } from './index.tailwind';

const PatientPage = () => {
  const [activeTab, setActiveTab] = useState(TabEnum.STATS);

  const handleSwitch = (tab: TabEnum) => setActiveTab(tab);

  return (
    <div className={classes.container}>
      <InfoSection />

      <div className={classes.tabsContainer}>
        <Tabs value={activeTab} onSwitch={handleSwitch} />
        {activeTab === TabEnum.ENTRIES ? <PatientEntries /> : <PatientStats />}
      </div>
    </div>
  );
};

export default PatientPage;