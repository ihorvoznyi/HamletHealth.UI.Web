import { useNavigate } from 'react-router-dom';

import Button from '@components/ui/button';
import { ArrowLeftSvg } from '@components/ui/icons';

import { appRoutes } from '@configs/routes.config';
import { classes } from './index.tailwind';

const Breadcrumb = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(appRoutes.myPatients);

  return (
    <div className={classes.container}>
      <Button type="outlined" onClick={handleNavigate} styles={classes.backBtn}>
        <ArrowLeftSvg />
        Your patients
      </Button>

      <Button type="outlined" onClick={() => {}} styles={classes.connectBtn}>
        Connect to hamlet health
      </Button>
    </div>
  );
};

export default Breadcrumb;