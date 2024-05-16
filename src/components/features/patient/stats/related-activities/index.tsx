import { Fragment, useState } from 'react';
import { MoodType } from '@shared/lib/types';
import MoodSvg from './mood-svg';
import Activity from './activity';
import { classes } from './index.tailwind';
import { useAppSelector } from '@shared/model';
import { selectPatientActivities } from '@app/store/entities/patient';
import { ActivityKhiDto } from '@app/store/entities/statistics/api/stats.api';

const moods: MoodType[] = ['great', 'good', 'meh', 'bad', 'awful'];

const RelatedActivities = () => {
  const [activeMood, setActiveMood] = useState<number>(0);
  const { activityKhi, activities } = useAppSelector(selectPatientActivities);

  const handleMoodClick = (index: number) => {
    setActiveMood(index);
  };

  const renderMoodIndicators = () => {
    return moods.map((mood, index) => (
      <Fragment key={mood}>
        <MoodSvg
          mood={mood}
          width={45}
          height={45}
          color={activeMood === index ? '#12C28D' : 'black'}
          styles={{
            text:
              activeMood === index
                ? 'text-[#12C28D] border-b-2 border-[#12C28D]'
                : 'text-[black]',
          }}
          onClick={() => handleMoodClick(index)}
        />
      </Fragment>
    ));
  };

  const renderActivityStatistic = () => {
    if (!activityKhi || !activities) {
      return <p>No data available.</p>;
    }

    const totalMoodCounts = Object.values(activityKhi).reduce(
      (acc, moodCounts) => {
        return acc + (moodCounts[activeMood] || 0);
      },
      0
    );

    if (totalMoodCounts === 0) {
      return <p className="whitespace-nowrap">No data available for this mood.</p>;
    }

    return activities.map((activity) => {
      const activityKey = Object.keys(activityKhi).find((key) =>
        key.includes(activity.id.toString())
      ) as keyof ActivityKhiDto;

      const moodCounts = activityKey ? activityKhi[activityKey] : [];
      const moodCount = moodCounts[activeMood] || 0;
      const percentage = (moodCount / totalMoodCounts) * 100;

      return (
        <li key={activity.id} className="flex-[25%]">
          <Activity
            icon={`data:image/svg;base64,${activity.icon}`}
            text={activity.name}
            times={moodCount}
            percentage={percentage}
          />
        </li>
      );
    });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Related Activities</h1>
      <div className={classes.moods}>{renderMoodIndicators()}</div>
      <ul className={classes.activities}>{renderActivityStatistic()}</ul>
    </div>
  );
};

export default RelatedActivities;
