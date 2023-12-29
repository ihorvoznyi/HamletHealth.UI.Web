import { ChangeEvent, KeyboardEvent, forwardRef, useImperativeHandle, useRef, memo } from 'react';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export type ArrowDirectionType = 'ArrowRight' | 'ArrowLeft';

export interface InputCodeRef {
  focus: () => void;
}

interface PropsType {
  position: number;
  isError: boolean;
  onChange: (position: number, digit: string) => void;
  onArrow: (key: ArrowDirectionType, position: number) => void;
}

const InputCodeComponent = forwardRef<InputCodeRef, PropsType>(({ 
  isError,
  position, 
  onChange,
  onArrow,
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(1, 1);
    },
  }));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (/^\d*$/.test(value)) {
      onChange(position, value);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      onArrow(event.key, position);
    }
  };

  return (
    <div className={cn(classes.container, isError && 'border-red')}>
      <input 
        ref={inputRef}
        className={classes.input}
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        maxLength={1}
      />
    </div>
  );
});

InputCodeComponent.displayName = 'InputCodeComponent';
export const InputCode = memo(InputCodeComponent);
