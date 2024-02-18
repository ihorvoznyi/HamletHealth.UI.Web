import { PromiseWithKnownReason } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { QueryFulfilledRejectionReason } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

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
