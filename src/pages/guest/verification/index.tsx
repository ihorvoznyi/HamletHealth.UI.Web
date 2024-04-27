import { useState } from 'react';
import { VerifiedEmail, UnverifiedEmail } from '@components/features/verification';

const VerificationPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  
  return isVerified ? <VerifiedEmail /> : <UnverifiedEmail callback={() => setIsVerified(true)} />;
};

export default VerificationPage;