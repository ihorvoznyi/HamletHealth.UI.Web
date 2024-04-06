import { SVGProps } from 'react';

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export type MoodType = 'great' | 'good' | 'meh' | 'bad' | 'awful';

export type RecordOf<T extends string | number | symbol, V> = {
  [key in T]: V
}

interface ISuccessOperation<TData> {
	isSuccess: true;
	data: TData;
}

interface IFailureOperation {
	isSuccess: false;
  message: string;
  data: null;
}

export type OperationResult<T> = ISuccessOperation<T> | IFailureOperation;

export class Operation {
  static failed(message: string = ''): IFailureOperation {
    return { isSuccess: false, message, data: null };
  }

  static success<T>(data: T): ISuccessOperation<T> {
    return { isSuccess: true, data };
  }
}
