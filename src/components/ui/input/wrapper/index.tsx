import { FC, PropsWithChildren, useState } from 'react';

import { CheckSvg } from '@components/ui/svg';

import { useClickOutside } from '@hooks/useClickOutside';

import { cn } from '@utils/style.util';
import { classes } from './index.tailwind';

export interface WrapperProps extends PropsWithChildren {
  label: string | undefined;

  showIcon: boolean;
  isValid: boolean;
  isFilled: boolean;
  error?: string;

  styles?: Partial<{
    label: string;
    container: string;
  }>
}

const Wrapper: FC<WrapperProps> = ({ 
  label,
  isFilled,
  isValid,
  styles,
  children,
  error = '',
  showIcon = true,
}) => {
  const [isInnerFocus, setIsInnerFocus] = useState(false);

  const disableFocus = () => setIsInnerFocus(false);
  const enableFocus = () => setIsInnerFocus(true);

  const ref = useClickOutside<HTMLDivElement>(disableFocus);
  
  const isLabelActive = isInnerFocus || isFilled;
  const showCheckIcon = !isInnerFocus && isValid && showIcon;

  return (
    <div
      ref={ref}
      onClick={enableFocus}
      className={cn(
        classes.container.base,
        isInnerFocus && classes.container.focus,
        styles?.container,
        error && 'border-red'
      )}
    >
      {label ? (
        <label
          className={cn(
            classes.label.base,
            isLabelActive
              ? cn(classes.label.active, error && 'text-red')
              : classes.label.inactive,
            !isInnerFocus && classes.label.unfocused,
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