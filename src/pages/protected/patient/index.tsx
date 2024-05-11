import { useEffect, useState } from 'react';

import Tabs, { TabEnum } from '@components/features/patient/tabs';
import { PatientStats, PatientEntries, InfoSection } from '@components/features/patient';
import { useConnect } from './connect';

import { classes } from './index.tailwind';
import { useLoading } from '@hooks/useLoading';

const PatientPage = () => {
	const { patient, isLoading } = useConnect();
	const { setGlobalLoader } = useLoading();
	const [activeTab, setActiveTab] = useState(TabEnum.STATS);

	const handleSwitch = (tab: TabEnum) => setActiveTab(tab);

  useEffect(() => {
    setGlobalLoader(isLoading);
    return () => {
      setGlobalLoader(false);
    };
  }, [isLoading]);

	return patient ? (
		<div className={classes.container}>
			<InfoSection />
			<div className={classes.tabsContainer}>
				<Tabs value={activeTab} onSwitch={handleSwitch} />
				{activeTab === TabEnum.ENTRIES ? <PatientEntries /> : <PatientStats />}
			</div>
		</div>
	) : null;
};

export default PatientPage;
