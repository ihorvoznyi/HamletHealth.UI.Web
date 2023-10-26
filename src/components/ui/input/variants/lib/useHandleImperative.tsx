import { ForwardedRef, RefObject, useImperativeHandle } from 'react';
import { CustomInputRef } from '../../index.interfaces';

export const useHandleImperative = (ref: ForwardedRef<CustomInputRef>, inputRef: RefObject<HTMLInputElement>) => {
  useImperativeHandle(ref, () => ({
    getCursorPosition: () => {
      return inputRef.current?.selectionStart || null;
    },
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));
};
