import { combineReducers } from '@reduxjs/toolkit';
import PersonReducer from '../client/features/person/personSlice';

const rootReducer = combineReducers({
  PersonDetails: PersonReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
