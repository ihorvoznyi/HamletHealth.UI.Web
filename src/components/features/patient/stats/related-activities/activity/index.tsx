import { FC, ElementType } from "react";
import { ISvgProps } from "@shared/lib/types";
import { classes } from "./index.tailwind";

export interface IActivity {
  icon: string | ElementType<ISvgProps>;
  text: string;
  times: number;
  percentage: number;
}

const Activity: FC<IActivity> = ({ icon, text, percentage, times }) => {
  return (
    <div className={classes.container}>
      <img
        src={`data:image/png;base64,${icon}`}
        width={32}
        height={32}
        alt={text}
      />
      <p className={classes.text}>{text}</p>
      <span className={classes.span}>
        {percentage}% ({times}x)
      </span>
    </div>
  );
};

export default Activity;
