import ActivitiesHeader from './activities-header';
import { ActivitiesBody } from './activities-body';

import { ActivitiesProvider } from './lib/context';

const ActivitiesMedicine = () => (
  <ActivitiesProvider>
    <ActivitiesHeader />
    <ActivitiesBody />
  </ActivitiesProvider>
);

export default ActivitiesMedicine;