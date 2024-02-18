import { ReactElement, useState } from 'react';

import { AuthScreenLayout } from '../shared/layout';
import { SendEmailForm } from './email-form';
import { CreatePasswordForm } from './create-password';
import { CodeVerificationForm } from './code-verification';

import { classes } from './index.tailwind';
import { RecordOf } from '@shared/lib/interfaces';

type StageType = 0 | 1 | 2;

export const ForgotPassword = () => {
  const [stage, setStage] = useState<StageType>(0);

  const handleVerifyCode = () => setStage(2);
  const handleEmailSubmit = () => setStage(1);

  const stageMapper: RecordOf<StageType, ReactElement> = {
    0: <SendEmailForm onSubmit={handleEmailSubmit} />,
    1: <CodeVerificationForm onVerify={handleVerifyCode} />,
    2: <CreatePasswordForm />,
  };
  
  return (
    <AuthScreenLayout>
      <div className={classes.container}>
        {stageMapper[stage]}
      </div>
    </AuthScreenLayout>
  );
};
