import { FC, useEffect, useRef, useState } from 'react';

import JournalEntry, { JournalEntryProps } from './mood-card';
import { ArrowRightSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';

interface PropsType {
  entries: JournalEntryProps[];
}

const JorunalEntriesCarousel: FC<PropsType> = ({ entries }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current!;

    const handleScroll = () => {
      // Check if the container is scrolled to the beginning or end
      const scrolledToLeft = container.scrollLeft === 0;
      const scrolledToRight = container.scrollLeft + container.clientWidth === container.scrollWidth;

      setShowLeftArrow(!scrolledToLeft);
      setShowRightArrow(!scrolledToRight);
    };

    container.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scroll = (direction: 'forward' | 'backward') => {
    if (ref.current) {
      const paddingX = 24;
      const scrollWidth = (ref.current.firstElementChild as HTMLElement).offsetWidth + paddingX;

      ref.current.scrollBy({
        left: direction === 'forward' 
          ? scrollWidth
          : -scrollWidth,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className={classes.container}>
      <div ref={ref} className={classes.scrollContainer}>
        {entries.map(item => <JournalEntry key={item.id} {...item} />)}
      </div>

      {showRightArrow ? (
          <button className={classes.rightArrowBtn} onClick={() => scroll('forward')}>
            <ArrowRightSvg className={classes.rightArrowIcon} />
          </button>
        ): null}
      
      {showLeftArrow ? (
          <button className={classes.leftArrowBtn} onClick={() => scroll('backward')}>
            <ArrowRightSvg className={classes.leftArrowIcon} />
          </button>
        ): null}
    </div>
  );
};

export default JorunalEntriesCarousel;
