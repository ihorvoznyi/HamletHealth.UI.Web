import Chart from "./chart";
import Filter from "../filter";
import RelatedActivities from "./related-activities";
import DailyActivityMoods from "./daily-activity-moods";

import { ACTIVITY_STREAKS } from "./daily-activity-moods/constants";

import { classes } from "./index.tailwind";
import { useConnect } from "./connect";
import { Loader } from "@components/ui/common";
import { useAppSelector } from "@shared/model";

import MoodPieChart from "@components/ui/charts/chart";

const Stats = () => {
  const { isLoading } = useConnect();
  const { khiStatistics } = useAppSelector(
    (state) => state.patientReducer.statistics
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <Filter />

      <div className={classes.streaks}>
        {ACTIVITY_STREAKS.map(({ activity }) => (
          <DailyActivityMoods key={activity} activity={activity} />
        ))}
      </div>

      <div className={classes.chart}>
        <div className="flex flex-col mt-[32px] ml-10">
          <h2 className="fs22SemiBold">Mood Count</h2>
          <MoodPieChart data={khiStatistics} />
        </div>
        <RelatedActivities />
      </div>
    </div>
  );
};

export default Stats;
