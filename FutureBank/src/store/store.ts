// store.ts

import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from '../../constants/Index';

export const store = init({
  models,
});

// Define RootState and Dispatch types based on the store configuration
export type Store = typeof store;
export type RootState = RematchRootState<RootModel>;
export type Dispatch = RematchDispatch<RootModel>;
