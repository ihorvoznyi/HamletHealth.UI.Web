import { useRef, useState } from 'react';

import { Button } from '@components/ui';

import { cn } from '@utils/style.util'; 
import { classes } from './index.tailwind';

const Description = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const isLabelHidden = isFocused || value;
  
  return (
    <div className={cn(classes.container, isFocused && 'border-han-blue')}>
      <p className={classes.paragraph}>Description</p>

      <div className={classes.textarea.container}>
        <label 
          className={cn(classes.label.base, isLabelHidden && classes.label.hidden)}
          onClick={() => inputRef.current?.focus()}
        >
          description <span className={classes.label.span}>(Optional)</span>
        </label>

        <textarea 
          ref={inputRef}
          className={classes.textarea.input}
          value={value}
          onBlur={() => setIsFocused(false)} 
          onFocus={() => setIsFocused(true)}
          onChange={event => setValue(event.target.value)}
        />

        <div className={classes.btnsContainer}>
          <Button type="outlined" onClick={() => {}} styles={classes.btn}>Save to template</Button>
          <Button type="outlined" onClick={() => {}} styles={classes.btn}>Use template</Button>
        </div>
      </div>
    </div>
  );
};

export default Description;