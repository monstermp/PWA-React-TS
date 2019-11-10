import { createSlice, PayloadAction } from 'redux-starter-kit';

interface PatientDetailsState {
  patientName: String;
  age: number | null;
  phoneNumber: String | null;
  error: String | null;
}

const initialState: PatientDetailsState = {
  patientName: '',
  age: null,
  phoneNumber: null,
  error: null
};

const patientDetails = createSlice({
  name: 'patientDetails',
  initialState,
  reducers: {
    getPatientsData(state) {
      state.patientName = '';
      state.age = null;
      state.phoneNumber = null;
      state.error = null;
    },
    getPatientSuccess(state, action: PayloadAction) {
      // const { patientName, age, phoneNumber } = action.payload
      state.patientName = 'Mahesh Patil'; //action.payload.patient_name
      state.age = 32;
      state.phoneNumber = '+91-9960955960';
      state.error = null;
    },
    getPatientFailure(state, action: PayloadAction<string>) {
      state.patientName = '';
      state.age = null;
      state.phoneNumber = null;
      state.error = null; //action.payload
    }
  }
});
export const { getPatientSuccess, getPatientFailure } = patientDetails.actions;

export default patientDetails.reducer;
