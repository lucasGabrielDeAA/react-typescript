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