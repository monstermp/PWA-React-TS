import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonsDetails } from '../../features/person/personSlice';
import { RootState } from '../../reducers';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { name, age, phoneNumber, email } = useSelector(
    (state: RootState) => state.PersonDetails
  );

  // const showPersonDetails = (name: string) => {
  //   dispatch(fetchPersonsDetails( name ))
  // }

  useEffect(() => {
    // if (name) {
      console.log(name)
    dispatch(fetchPersonsDetails(name));
    // }
  }, [name, dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{/* Edit <code>src/App.tsx</code> and save to reload. */}</p>
        Welcome {name} to PWA-React-TypeScript App!! Your email id is {email}{' '}
        and Phone number is {phoneNumber}
      </header>
    </div>
  );
};

export default App;
