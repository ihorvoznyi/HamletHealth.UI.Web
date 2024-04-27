import { MoodType } from '@shared/lib/types';

export interface IDailyHits {
  activity: string;
  hits: number;
  days: IDayHit[]
}

export interface IDayHit {
  date: string; 
  mood: MoodType;
  isDone: boolean;
}

export interface IStreakItem {
  isStreak: boolean;
  days: IDayHit[];
}
