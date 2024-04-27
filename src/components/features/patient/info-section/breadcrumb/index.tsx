import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ShareModal from './share-modal';
import { Button } from '@components/ui/controls';
import { ArrowLeftSvg } from '@components/ui/svg';

import { APP_ROUTES } from '@configs/routes.config';
import { classes } from './index.tailwind';

const Breadcrumb = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(APP_ROUTES.MY_PATIENTS);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.container}>
      <Button variant="outlined" onClick={handleNavigate} styles={classes.backBtn}>
        <ArrowLeftSvg />
        Your patients
      </Button>

      <Button variant="outlined" onClick={() => setShowModal(true)} styles={classes.connectBtn}>
        Connect to hamlet health
      </Button>

      {showModal ? <ShareModal onClose={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default Breadcrumb;