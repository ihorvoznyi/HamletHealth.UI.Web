import { useEffect, useRef } from 'react';

export function useClickOutside<TRef extends HTMLElement>(callback: () => void) {
  const ref = useRef<TRef>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return ref;
}
