import { combineReducers } from '@reduxjs/toolkit';
import patientReducer from '../client/features/patient/patientSlice';

const rootReducer = combineReducers({
  patientDetails: patientReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
