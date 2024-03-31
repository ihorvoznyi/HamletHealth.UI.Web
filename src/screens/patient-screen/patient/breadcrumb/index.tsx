import { useNavigate } from 'react-router-dom';

import ShareModal from '../share-modal';
import PrimaryButton from '@components/ui/button';
import { ArrowLeftSvg } from '@components/ui/svg';

import { APP_ROUTES } from '@configs/routes.config';
import { classes } from './index.tailwind';
import { useState } from 'react';

const Breadcrumb = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(APP_ROUTES.MY_PATIENTS);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.container}>
      <PrimaryButton variant="outlined" onClick={handleNavigate} styles={classes.backBtn}>
        <ArrowLeftSvg />
        Your patients
      </PrimaryButton>

      <PrimaryButton variant="outlined" onClick={() => setShowModal(true)} styles={classes.connectBtn}>
        Connect to hamlet health
      </PrimaryButton>

      {showModal ? <ShareModal onClose={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default Breadcrumb;