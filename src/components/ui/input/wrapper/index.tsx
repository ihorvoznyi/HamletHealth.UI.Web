import { FC, PropsWithChildren } from 'react';

import { CheckSvg } from '@components/ui/svg';

import { useInput } from '../lib/hooks';
import { useClickOutside } from '@hooks/useClickOutside';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export interface WrapperProps extends PropsWithChildren {
  label: string | undefined;

  watchValue?: string;
  error?: string;

  styles?: Partial<{
    label: string;
    container: string;
  }>
}

const Wrapper: FC<WrapperProps> = ({ 
  label,
  styles,
  children,
  error = '',
  watchValue,
}) => {
  const { type, value, isFocus, setIsFocus } = useInput();

  const disableFocus = () => setIsFocus(false);
  const enableFocus = () => setIsFocus(true);

  const ref = useClickOutside<HTMLDivElement>(disableFocus);
  
  const isFilled = !!value || !!watchValue;
  const showIcon = type !== 'password';
  const isLabelActive = isFocus || isFilled;
  const showCheckIcon = !isFocus && !error && isFilled && showIcon;

  return (
    <div
      ref={ref}
      onClick={enableFocus}
      className={cn(
        classes.container.base,
        isFocus && classes.container.focus,
        styles?.container,
        error && 'border-red'
      )}
    >
      {label ? (
        <label
          className={cn(
            classes.label.base,
            isLabelActive
              ? cn(classes.label.active, !!error && 'text-red')
              : classes.label.inactive,
            !isFocus && cn(classes.label.unfocused, !!error && 'text-red'),
            styles?.label,
          )}
        >
          {label}
        </label>
      ) : null}
      {children}
      {showCheckIcon ? <CheckSvg className={classes.icon} /> : null}
      {error ? <span className={classes.errorMessage}>{error}</span> : null}
    </div>
  );
};

export default Wrapper;