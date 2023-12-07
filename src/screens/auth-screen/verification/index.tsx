import { useState } from 'react';
import { Unverified } from './unverified-email';
import { VerifiedEmail } from './verified-email';

const Verification = () => {
  const [isVerified, setIsVerified] = useState(false);
  
  return isVerified ? <VerifiedEmail /> : <Unverified callback={() => setIsVerified(true)} />;
};

export default Verification;