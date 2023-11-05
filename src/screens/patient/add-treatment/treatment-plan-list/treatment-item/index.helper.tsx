import { MovieSvg, PillsSvg, SleepSvg } from '@components/ui/icons';

export const getTreatmentIcon = (iconType: 'medicine' | 'movie' | 'sleep') => {
  switch (iconType) {
    case 'sleep':
      return <SleepSvg />;
    
    case 'medicine':
      return <PillsSvg />;
    
    case 'movie':
      return <MovieSvg />;
  }
};