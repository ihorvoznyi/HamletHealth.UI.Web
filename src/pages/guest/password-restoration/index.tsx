import { ReactElement, useState } from 'react';

import { AuthLayout } from '@components/layout';
import { SendEmailForm, CreatePasswordForm, CodeVerificationForm } from '@components/features/forms';

import { RecordOf } from '@shared/lib/types';

import { classes } from './index.tailwind';

type StageType = 0 | 1 | 2;

const PasswordRestorationPage = () => {
  const [stage, setStage] = useState<StageType>(0);

  const handleVerifyCode = () => setStage(2);
  const handleEmailSubmit = () => setStage(1);

  const stageMapper: RecordOf<StageType, ReactElement> = {
    0: <SendEmailForm onSubmit={handleEmailSubmit} />,
    1: <CodeVerificationForm onVerify={handleVerifyCode} />,
    2: <CreatePasswordForm />,
  };
  
  return (
    <AuthLayout>
      <div className={classes.container}>
        {stageMapper[stage]}
      </div>
    </AuthLayout>
  );
};

export default PasswordRestorationPage;