import { ReactElement, useState } from 'react';

import { AuthLayout } from '../layout';
import { SendEmailForm } from './email-form';
import { CreatePasswordForm } from './create-password';
import { CodeVerificationForm } from './code-verification';

import { classes } from './index.tailwind';

type StageType = 0 | 1 | 2;

type IStageMapper = {
  [key in 0 | 1 | 2]: ReactElement;
}

export const ForgotPassword = () => {
  const [stage, setStage] = useState<StageType>(0);

  const handleVerifyCode = () => setStage(2);
  const handleEmailSubmit = () => setStage(1);

  const stageMapper: IStageMapper = {
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
