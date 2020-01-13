//Slice is a combination of action.js and reducer.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../createStore';
import { Patient, fetchPatient } from '../../api/fetch';

interface PatientDetailsState {
  name: string;
  age: number | null;
  phoneNumber: string | null;
  email: string | null;
  error: String | null;
}

const initialState: PatientDetailsState = {
  name: '',
  age: null,
  phoneNumber: null,
  email: null,
  error: null
};

const patientDetailsSlice = createSlice({
  name: 'patientDetails',
  initialState,
  reducers: {
    getPatientSuccess(state, action: PayloadAction<Patient>) {
      const { name, age, phoneNumber, email } = action.payload;
      state.name = name;
      state.age = age;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.error = null;
    },
    getPatientFailure(state, action: PayloadAction<string>) {
      state.name = '';
      state.age = null;
      state.phoneNumber = null;
      state.error = action.payload;
    }
  }
});

//Action Types
export const {
  getPatientSuccess,
  getPatientFailure
} = patientDetailsSlice.actions;

export default patientDetailsSlice.reducer;

export const fetchPatientsDetails = (
  patientName: string
): AppThunk => async dispatch => {
  try {
    // dispatch(getPatientDetailsStart()) // Can be used to set loading = 'true'
    const Patient = await fetchPatient(patientName);
    dispatch(getPatientSuccess(Patient));
  } catch (err) {
    dispatch(getPatientFailure(err));
  }
};
