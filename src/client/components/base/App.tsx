import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatientsDetails } from '../../features/patient/patientSlice';
import { RootState } from '../../reducers';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { name, age, phoneNumber, email } = useSelector(
    (state: RootState) => state.patientDetails
  );

  // const showPatientDetails = (name: string) => {
  //   dispatch(fetchPatientsDetails( name ))
  // }

  useEffect(() => {
    // if (name) {
    dispatch(fetchPatientsDetails(name));
    // }
  }, [name, dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{/* Edit <code>src/App.tsx</code> and save to reload. */}</p>
        Welcome {name} to Hello Clinic!! Your email id is {email} and Phone
        number is {phoneNumber}
      </header>
    </div>
  );
};

export default App;
