import React, { FC, PropsWithChildren, ReactElement, useRef, useState } from 'react';

import { CheckSvg } from '@components/ui/svg';

import { CustomInputRef } from '../index.interfaces';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export type WrapperClasses = {
  container: string;
  label: string;
}

interface PropsType {
  isFocused: boolean;
  isInputValid: boolean;

  onFocus: () => void;

  label?: string;
  styles?: Partial<WrapperClasses>
}

const InputWrapper: FC<PropsWithChildren<PropsType>> = ({ 
  isFocused = false, 
  label, 
  styles, 
  isInputValid, 
  onFocus,
  children
}) => {
  // const inputRef = useRef<CustomInputRef>(null); // This ref should control a child input

  const isLabelActive = false;
  const showCheckIcon = isInputValid && !isFocused;

  // const childrenWithRef = React.Children.map(children, child => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child as ReactElement, { ref: inputRef });
  //   }
  //   return child;
  // });

  return (
    <div className={cn(
      classes.container,
      isFocused && 'border-han-blue',
      styles?.container)}
    >
      {label && (
        <label
          className={cn(
            classes.label.base,
            isLabelActive 
              ? classes.label.active
              : classes.label.inactive,
            !isFocused && classes.label.unfocused
          )}
          onClick={onFocus}>{label}</label>
      )}
      {children}
      {showCheckIcon && <CheckSvg className={classes.icon} />}
    </div>
  );
};

export default InputWrapper;
