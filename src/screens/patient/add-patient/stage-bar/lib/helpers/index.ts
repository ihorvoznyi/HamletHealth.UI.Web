import { SvgAttrsType } from '../../index.interfaces';
import { StageStatusType } from '../../lib';

export const statusColors: Record<StageStatusType, string> = {
  checked: '#4366C5',
  filled: '#38AD79',
  unchecked: 'rgba(0, 0, 0, 0.32)'
};

export const getDashedSvgAttrs = (status: StageStatusType, isFull = false): SvgAttrsType => ({
  fillType: isFull ? 'full' : 'partial',
  color: statusColors[status],
});
