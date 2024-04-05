import { Fragment, useState } from "react";

import { MoodType } from "@shared/lib/types";

import MoodSvg from "./mood-svg";
import Activity, { IActivity } from "./activity";
import {
  CoffeeSvg,
  FootballSvg,
  FriendsSvg,
  GiftSvg,
  MovieSvg,
  ShoppingSvg,
} from "@components/ui/svg";

import { classes } from "./index.tailwind";

const RelatedActivities = () => {
  const [activeMood, setActiveMood] = useState<MoodType>("great");

  const renderMoodSvg = (mood: MoodType) => {
    const isActive = activeMood === mood;
    const color = isActive ? "#12C28D" : "black";
    console.log(color);
    return (
      <MoodSvg
        mood={mood}
        width={45}
        height={45}
        color={color}
        styles={{
          text: isActive
            ? `text-[${color}] border-b-2 border-[${color}]`
            : `text-[${color}]`,
        }}
        onClick={() => setActiveMood(mood)}
      />
    );
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Related Activities</h1>

      <div className={classes.moods}>
        {moods.map((mood) => (
          <Fragment key={mood}>{renderMoodSvg(mood)}</Fragment>
        ))}
      </div>

      <ul className={classes.activities}>
        {activities.map((activity) => (
          <Activity key={activity.text} {...activity} />
        ))}
      </ul>
    </div>
  );
};

const moods: MoodType[] = ["great", "good", "meh", "bad", "awful"];
const activities: IActivity[] = [
  {
    Icon: CoffeeSvg,
    text: "Date",
    times: 12,
    percentage: 24,
  },
  {
    Icon: FriendsSvg,
    text: "Friends",
    times: 44,
    percentage: 55,
  },
  {
    Icon: MovieSvg,
    text: "Movie",
    times: 8,
    percentage: 15,
  },
  {
    Icon: ShoppingSvg,
    text: "Shopping",
    times: 28,
    percentage: 45,
  },
  {
    Icon: GiftSvg,
    text: "Volunteer",
    times: 20,
    percentage: 18,
  },
  {
    Icon: FootballSvg,
    text: "Football",
    times: 33,
    percentage: 44,
  },
];

export default RelatedActivities;
