import { combineReducers } from 'redux-starter-kit';
import patientReducer from '../client/features/patient/patientSlice';

const rootReducer = combineReducers({
  app: patientReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
