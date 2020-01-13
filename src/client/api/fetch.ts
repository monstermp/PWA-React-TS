// All Rest End Point call generic functions get, put, post, delete will be written here
import axios from 'axios';
// export const TEMP_VAR = 'Added just to make build work';

export interface Patient {
  // This can be shifted to model
  name: string;
  age: number;
  dob: number;
  phoneNumber: string;
  email: string;
}

export async function fetchPatient(name: string): Promise<Patient> {
  // const url = 'https://REST END POINT URL' All Rest end point URLS can be configured in a constant file

  try {
    // const Patient = await axios.get<Patient>(url)

    return {
      name: 'Mahesh Patil',
      age: 32,
      dob: 32,
      phoneNumber: '9960955960',
      email: 'monstermp@gmail.com'
    };
  } catch (err) {
    throw err;
  }
}
