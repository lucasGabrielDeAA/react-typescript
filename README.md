# react-typescript

In this application we are going to simply retrieve information from our backend application, built using [Node+Typescript](https://github.com/lucasGabrielDeAA/node-typescript). And to some type validations. So let's do this.

## Running the application

You can simply clone this repository and run the application, using the following command.

```
  git clone https://github.com/lucasGabrielDeAA/react-typescript && cs react-typescript
  yarn install
  yarn start
```

## Creating your onw application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the following command.

```
  yarn create react-app <yourAppName> --template=typescript
```

Then you delete all test and css files from the folder created, and remove the imports from the files. You will notice that this app contains some files with the extension **.ts** and some other with the extension **.tsx**. the difference between this files is the **JSX** usage we have on **React** environment.
File where we are going to use **js** with only logical programming will use the **.ts** extension. And files with logical programming and visual/rendering information will use the **.tsx** extension.

To retrieve the data from the **backend's application** we are going to use a lib called `axios`, to do this, first of all, install it using the following command.

```
  yarn add axios
```

Then create a **services** folder under your **src** folder with a **api.ts** file on it. The content of this file is ahead.

```javascript
  import axios from 'axios';

  const PORT = 3333;

  const api = axios.create({
    baseURL: `http://localhost:${PORT}`,
  });

  export default api;
```

Then, in our **App.tsx** file we are going to implement the api calls. Paste the following code on it. this code contains the typescript usage on information retrieved from the backend, and on the state of the functional component.

```javascript
  import React, { useEffect, useState } from 'react';

  // Importing our api's file
  import api from './services/api';

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
          <p>{user.name}</p>
        ))}
      </div>
    );
  }

  export default App;

```

Now, we are going to create our own component with typescript implementation to its properties. To do this, create a **components** folder with a **User.tsx** file on it. And paste this code on it.

```javascript
  import React from 'react';

  // interface used to instantiate our model
  interface IUser {
    name: string,
    email: string,
  }

  // interface used to determines the component's property type.
  interface Props {
    user: IUser,
  }

  // To override the current property types from the react components and use the children and other default
  // properties, we need to determine the types of ouw properties like this.
  const User: React.FunctionComponent<Props> = ({ user }) => {
    return (
      <div>
        <p><b>Nome: {user.name}</b></p>
        <p><b>Email: {user.email}</b></p>
      </div>
    )
  }

  export default User;
```

After that you can use this component on the **App.tsx** file. just doing some updated.

```javascript
  ...
  // Importing our component
  import User from './components/User';
  ...

  ...
  {users.map(user => (
    <User user={user} />
  ))}
  ...
```
