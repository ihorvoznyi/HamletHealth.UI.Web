import { useNavigate } from 'react-router-dom';

import ShareModal from '../share-modal';
import Button from '@components/ui/button';
import { ArrowLeftSvg } from '@components/ui/svg';

import { appRoutes } from '@configs/routes.config';
import { classes } from './index.tailwind';
import { useState } from 'react';

const Breadcrumb = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(appRoutes.myPatients);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.container}>
      <Button type="outlined" onClick={handleNavigate} styles={classes.backBtn}>
        <ArrowLeftSvg />
        Your patients
      </Button>

      <Button type="outlined" onClick={() => setShowModal(true)} styles={classes.connectBtn}>
        Connect to hamlet health
      </Button>

      {showModal ? <ShareModal onClose={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default Breadcrumb;