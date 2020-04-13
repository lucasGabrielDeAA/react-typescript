import React, { useEffect, useState } from 'react';

// Importing our api's file
import api from './services/api';

// Importing our component
import User from './components/User';

// Creating the interface to isntantiate our model.
interface IUser {
  name: string,
  email: string,
}

function App() {
  // The useState will use our IUser interface to determine what kind of types we are going to use.
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Here we are retrieving the data from the backend's application using the IUser interface to
    // determine the data format.
    const {data} = await api.get<Array<IUser>>('/users');

    setUsers(data);
  }

  return (
    <div className="App">
    {/* Here we are only do a map on our user's list */}
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}

export default App;
