import { FC, useCallback, useEffect, useRef, useState } from 'react';

import JournalEntry, { JournalEntryProps } from './mood-card';
import { ArrowRightSvg } from '@components/ui/svg';

import { classes } from './index.tailwind';
import { useWindowSize } from '@hooks/useWindowSize';

interface PropsType {
	entries: JournalEntryProps[];
}

const JorunalEntriesCarousel: FC<PropsType> = ({ entries }) => {
	const { width: windowWidth } = useWindowSize();

	const [showLeftArrow, setShowLeftArrow] = useState(false);
	const [showRightArrow, setShowRightArrow] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// Extracting the handler for more clarity
	const handleScroll = useCallback(() => {
		if (ref.current) {
			const containerEl = ref.current;
			const entryElements = containerEl.children;
			const entryWidth = entryElements[0]?.clientWidth ?? 0;
      const paddingY = 40;
			const isEnough = entryWidth * entryElements.length + paddingY > containerEl.clientWidth;

			const scrolledToLeft = containerEl.scrollLeft === 0;
			const scrolledToRight =
				containerEl.scrollLeft + containerEl.clientWidth === containerEl.scrollWidth;

			setShowLeftArrow(!scrolledToLeft);
			setShowRightArrow(!scrolledToRight && isEnough);
		}
	}, [windowWidth]); // Depend on windowWidth to re-check on resize

	useEffect(() => {
		const containerEl = ref.current!;

    containerEl.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

		// Cleanup the event listener on component unmount
		return () => {
			containerEl.removeEventListener('scroll', handleScroll);
		};
	}, [windowWidth]);

	const scroll = (direction: 'forward' | 'backward') => {
		if (ref.current) {
			const paddingX = 24;
			const scrollWidth = (ref.current.firstElementChild as HTMLElement).offsetWidth + paddingX;

			ref.current.scrollBy({
				left: direction === 'forward' ? scrollWidth : -scrollWidth,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className={classes.container}>
			<div ref={ref} className={classes.scrollContainer}>
				{entries.map(item => (
					<JournalEntry key={item.id} {...item} />
				))}
			</div>

			{showRightArrow ? (
				<button className={classes.rightArrowBtn} onClick={() => scroll('forward')}>
					<ArrowRightSvg className={classes.rightArrowIcon} />
				</button>
			) : null}

			{showLeftArrow ? (
				<button className={classes.leftArrowBtn} onClick={() => scroll('backward')}>
					<ArrowRightSvg className={classes.leftArrowIcon} />
				</button>
			) : null}
		</div>
	);
};

export default JorunalEntriesCarousel;
