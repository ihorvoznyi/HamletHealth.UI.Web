import { ElementType } from 'react';
import { ISvgProps, MoodType } from '../types';
import { MoodGreatSvg, MoodGoodSvg, MoodMehSvg, MoodBadSvg, MoodAwfulSvg } from '@components/ui/svg';

export const getMoodComponent = (mood: MoodType): ElementType<ISvgProps> | null => {
  switch (mood) {
    case 'great':
      return MoodGreatSvg;
    case 'good':
      return MoodGoodSvg;
    case 'meh':
      return MoodMehSvg;
    case 'bad':
      return MoodBadSvg;
    case 'awful':
      return MoodAwfulSvg;
    default:
      return null;
  }
};