// All Rest End Point call generic functions get, put, post, delete will be written here
import axios from 'axios';
// export const TEMP_VAR = 'Added just to make build work';

export interface Patient {
  name: string;
  age: number;
  dob: number;
  phoneNumber: string;
  email: string;
}
