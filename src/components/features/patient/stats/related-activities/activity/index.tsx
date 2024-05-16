import { FC, useState } from 'react';

import { classes } from './index.tailwind';

interface PropsType {
  icon: string;
  text: string;
  times: number;
  percentage: number;
}

const Activity: FC<PropsType> = ({ icon, text, percentage, times }) => {
  const [image, setImage] = useState<string>(icon);
  const handleImageError = () => {
    setImage('/assets/corrupted-icon.svg');
  };

  return (
    <div className={classes.container}>
      <img
        src={image}
        width={32}
        height={32}
        alt={text}
        onError={handleImageError}
      />
      <p className={classes.text}>{text}</p>
      <span className={classes.span}>
        {percentage}% ({times}x)
      </span>
    </div>
  );
};

export default Activity;
