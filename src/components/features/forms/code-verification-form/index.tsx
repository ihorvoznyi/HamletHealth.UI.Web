import { FC, useCallback, useRef, useState } from 'react';

import { Timer } from './timer';
import { Button } from '@components/ui/controls';
import { ArrowDirectionType, InputCode, InputCodeRef } from './input-code';

import { classes } from './index.tailwind';

interface PropsType {
  onVerify: () => void;
}

const CodeVerificationForm: FC<PropsType> = ({ onVerify }) => {
  const [verifCode, setVerifCode] = useState({ 0: '', 1: '', 2: '', 3: '' });
  const [showTimer, setShowTimer] = useState(true);
  const [isError, setIsError] = useState(false);

  const inputCodeRefs = Array.from({ length: 4 }, () => useRef<InputCodeRef>(null));

  const handleChange = useCallback((idx: number, digit: string) => {
    setVerifCode((prev) => ({ ...prev, [idx]: digit }));
    setIsError(false);

    const nextIdx = idx + 1;
    const prevIdx = idx - 1;

    if (nextIdx < 4 && digit.length) {
      inputCodeRefs[nextIdx]?.current?.focus();
    } else if (prevIdx >= 0 && !digit.length) {
      inputCodeRefs[prevIdx]?.current?.focus();
    }
  }, []);

  const handleArrow = useCallback((key: ArrowDirectionType, position: number, ) => {
    const direction = key === 'ArrowRight' ? 1 : -1;
    const targetIdx = position + direction;

    if (targetIdx >= 0 && targetIdx < 4) {
      inputCodeRefs[targetIdx]?.current?.focus();
    }
  }, []);

  const handleSubmit = () => {
    // some logic
    setShowTimer(true);
  };

  const handleResend = () => {
    // some logic
    setShowTimer(true);
  };
  const handleTimer = () => setShowTimer(false);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Verify Email</h1>
      <p className={classes.subtitle}>A 4-digit code has been sent to your email</p>

      <form className={classes.form}>
        {inputCodeRefs.map((ref, idx) => (
          <InputCode
            key={idx}
            ref={ref}
            isError={isError}
            position={idx}
            onArrow={handleArrow}
            onChange={handleChange}
          />
        ))}
      </form>

      {showTimer && !isError ? <Timer callback={handleTimer} /> : null}
      {isError ? <p className={classes.error}>Invalid code entered</p> : null}

      <Button onClick={handleSubmit} styles={classes.verifyBtn}>Verify</Button>

      {!showTimer ? (
        <Button 
          variant="outlined" 
          onClick={handleResend} 
          styles={classes.resendBtn}
        >
          Resend code
        </Button>
      ) : null}
    </div>
  );
};

export default CodeVerificationForm;
