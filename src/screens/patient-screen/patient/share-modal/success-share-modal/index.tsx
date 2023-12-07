import Modal from '@components/ui/modal';
import Button from '@components/ui/button';
import { WideCheckSvg } from '@components/ui/icons/checks';

import { classes } from './index.tailwind';

const SuccessSharedModal = () => {
  const handleClose = () => {
    //
  };

  return (
    <Modal styles={classes.modal}>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Share email were successfully sent!
        </h1>

        <p className={classes.paragraph}>
          A notification will send to patient. If he/she approve it [jerrygm4513@yahoo.com] can access to this profile
        </p>

        <div className={classes.checkContainer}>
          <WideCheckSvg width={48} height={48} />
        </div>

        <Button onClick={handleClose} styles={classes.backBtn}>Back to profile</Button>
      </div>
    </Modal>
  );
};

export default SuccessSharedModal;