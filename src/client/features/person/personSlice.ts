//Slice is a combination of action.js and reducer.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../createStore';
import { Person, fetchPerson } from '../../api/fetch';

interface PersonDetailsState {
  name: string;
  age: number | null;
  phoneNumber: string | null;
  email: string | null;
  error: String | null;
}

const initialState: PersonDetailsState = {
  name: '',
  age: null,
  phoneNumber: null,
  email: null,
  error: null
};

const PersonDetailsSlice = createSlice({
  name: 'PersonDetails',
  initialState,
  reducers: {
    getPersonSuccess(state, action: PayloadAction<Person>) {
      const { name, age, phoneNumber, email } = action.payload;
      state.name = name;
      state.age = age;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.error = null;
    },
    getPersonFailure(state, action: PayloadAction<string>) {
      state.name = '';
      state.age = null;
      state.phoneNumber = null;
      state.error = action.payload;
    }
  }
});

//Action Types
export const {
  getPersonSuccess,
  getPersonFailure
} = PersonDetailsSlice.actions;

export default PersonDetailsSlice.reducer;

export const fetchPersonsDetails = (
  PersonName: string
): AppThunk => async dispatch => {
  try {
    // dispatch(getPersonDetailsStart()) // Can be used to set loading = 'true'
    const Person = await fetchPerson(PersonName);
    dispatch(getPersonSuccess(Person));
  } catch (err) {
    dispatch(getPersonFailure(err));
  }
};
