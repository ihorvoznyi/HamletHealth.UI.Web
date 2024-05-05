import type { QueryFulfilledRejectionReason } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { PromiseWithKnownReason } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import type { ApiResponse } from '@shared/lib/types';

export type QueryFulfilledType<T> = PromiseWithKnownReason<{
  data: ApiResponse<T>;
  meta: object | undefined;
}, QueryFulfilledRejectionReason<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>>>

export type thunkDispatch = ThunkDispatch<unknown, unknown, AnyAction>;
