import { RootState } from '@shared/model';

export const selectIsGlobalLoading = (state: RootState) => state.appReducer.isLoading;