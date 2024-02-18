import { SVGProps } from 'react';
import { PromiseWithKnownReason } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { QueryFulfilledRejectionReason } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export type MoodType = 'great' | 'good' | 'meh' | 'bad' | 'awful';

export type RecordOf<T extends string | number | symbol, V> = {
  [key in T]: V
}

type queryRejectionReasonType = QueryFulfilledRejectionReason<
  BaseQueryFn<
    string | FetchArgs, 
    unknown, 
    FetchBaseQueryError, 
    object, 
    FetchBaseQueryMeta
  >
>

export type queryFulfilledType<TData> = PromiseWithKnownReason<{
  data: TData;
  meta: FetchBaseQueryMeta | undefined;
}, queryRejectionReasonType>

export type thunkDispatch = ThunkDispatch<unknown, unknown, AnyAction>;