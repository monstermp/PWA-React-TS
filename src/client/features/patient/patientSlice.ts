//Slice is a combination of action.js and reducer.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../createStore';
import { Patient } from '../../api/fetch';

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
    getPatientsData(state) {
      state.name = '';
      state.age = null;
      state.phoneNumber = null;
      state.error = null;
    },
    getPatientSuccess(state, action: PayloadAction<Patient>) {
      // const { name, age, phoneNumber } = action.payload
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.error = null;
    },
    getPatientFailure(state, action: PayloadAction<string>) {
      state.name = '';
      state.age = null;
      state.phoneNumber = null;
      state.error = null; //action.payload
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
    // const Patient = await getPatient(patientName)
    const Patient = {
      name: 'Mahesh Patil',
      age: 32,
      dob: 32,
      phoneNumber: '9960955960',
      email: 'monstermp@gmail.com'
    };
    dispatch(getPatientSuccess(Patient));
  } catch (err) {
    dispatch(getPatientFailure(err));
  }
};
