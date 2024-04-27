import { IDailyHits, IStreakItem } from './lib/interfaces';

export const DAILY_HITS_MOCK: IDailyHits = {
  activity: 'Workout',
  hits: 20,
  days: [
    { date: '1.06', mood: 'good', isDone: true },
    { date: '2.06', mood: 'good', isDone: true },
    { date: '3.06', mood: 'good', isDone: true },
    { date: '4.06', mood: 'good', isDone: true },
    { date: '5.06', mood: 'great', isDone: true },
    { date: '6.06', mood: 'good', isDone: true },
    { date: '7.06', mood: 'great', isDone: true },
    { date: '8.06', mood: 'good', isDone: true },
    { date: '9.06', mood: 'great', isDone: false },
    { date: '10.06', mood: 'awful', isDone: true },
    { date: '11.06', mood: 'bad', isDone: true },
    { date: '12.06', mood: 'awful', isDone: true },
    { date: '13.06', mood: 'meh', isDone: false },
    { date: '14.06', mood: 'meh', isDone: true },
    { date: '15.06', mood: 'meh', isDone: true },
    { date: '16.06', mood: 'meh', isDone: false },
    { date: '17.06', mood: 'good', isDone: true },
    { date: '18.06', mood: 'great', isDone: true },
    { date: '19.06', mood: 'bad', isDone: true },
    { date: '20.06', mood: 'bad', isDone: true },
    { date: '21.06', mood: 'bad', isDone: true },
    { date: '22.06', mood: 'great', isDone: true },
    { date: '23.06', mood: 'great', isDone: true },
    { date: '24.06', mood: 'great', isDone: true },
    { date: '25.06', mood: 'awful', isDone: true },
    { date: '26.06', mood: 'bad', isDone: true },
    { date: '27.06', mood: 'meh', isDone: false },
    { date: '28.06', mood: 'good', isDone: false },
    { date: '29.06', mood: 'good', isDone: false },
    { date: '30.06', mood: 'good', isDone: false },
  ]
};

export const STREAKS_MOCK: IStreakItem[] = [
  {
    isStreak: true,
    days: [
      { date: '1.06', mood: 'good', isDone: true },
      { date: '2.06', mood: 'good', isDone: true },
      { date: '3.06', mood: 'good', isDone: true },
      { date: '4.06', mood: 'good', isDone: true },
      { date: '5.06', mood: 'great', isDone: true },
      { date: '6.06', mood: 'good', isDone: true },
      { date: '7.06', mood: 'great', isDone: true },
      { date: '8.06', mood: 'good', isDone: true },
    ],
  },
  {
    isStreak: false,
    days: [{ date: '9.06', mood: 'awful', isDone: false }],
  },
  {
    isStreak: true,
    days: [
      { date: '10.06', mood: 'awful', isDone: true },
      { date: '11.06', mood: 'bad', isDone: true },
      { date: '12.06', mood: 'awful', isDone: true },
    ],
  },
  {
    isStreak: false,
    days: [{ date: '13.06', mood: 'meh', isDone: false }]
  },
  {
    isStreak: true,
    days: [
      { date: '14.06', mood: 'meh', isDone: true },
      { date: '15.06', mood: 'meh', isDone: true },
    ],
  },
  {
    isStreak: false,
    days: [{ date: '16.06', mood: 'meh', isDone: false }],
  },
  {
    isStreak: true,
    days: [
      { date: '17.06', mood: 'good', isDone: true },
      { date: '18.06', mood: 'great', isDone: true },
      { date: '19.06', mood: 'bad', isDone: true },
      { date: '20.06', mood: 'bad', isDone: true },
      { date: '21.06', mood: 'bad', isDone: true },
      { date: '22.06', mood: 'great', isDone: true },
      { date: '23.06', mood: 'great', isDone: true },
      { date: '24.06', mood: 'great', isDone: true },
      { date: '25.06', mood: 'awful', isDone: true },
      { date: '26.06', mood: 'bad', isDone: true },
    ],
  },
  {
    isStreak: false,
    days: [
      { date: '27.06', mood: 'meh', isDone: false },
      { date: '28.06', mood: 'good', isDone: true },
    ],
  },
  {
    isStreak: false,
    days: [
      { date: '29.06', mood: 'good', isDone: false },
      { date: '30.06', mood: 'good', isDone: false },
    ],
  }
];

export const ACTIVITY_STREAKS = [
  {
    activity: 'Medication',
    days: DAILY_HITS_MOCK.days,
    streaks: DAILY_HITS_MOCK.hits,
  },
  {
    activity: 'Workout',
    days: DAILY_HITS_MOCK.days,
    streaks: DAILY_HITS_MOCK.hits,
  },
];