import { forwardRef, useRef } from 'react';
import { CustomInputRef, FieldProps } from '../index.interfaces';
import { useHandleImperative } from './lib/useHandleImperative';

const TextField = forwardRef<CustomInputRef, FieldProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useHandleImperative(ref, inputRef);  

  return <input ref={inputRef} {...props} />;
});

TextField.displayName = 'TextField';

export default TextField;
