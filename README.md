# Authentication Context for React Applications

## Overview

This package provides a simple and reusable context for managing authentication states in React applications. It exports an AuthContext and an AuthProvider component to wrap your application or specific parts of it, providing an easy way to handle user authentication.

## Getting Started

## Installation
To use the AuthContext in your project, start by copying the code into your project's structure, ideally in a contexts or providers directory.

## Usage
Wrap your application or the part of it that requires authentication state with the AuthProvider component. You can customize the behavior by passing onLogin, onLogout, and defaultAuthenticated props to the AuthProvider.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/AuthContext";
import App from './App';

ReactDOM.render(
  <AuthProvider
    onLogin={() => console.log('Login successful')}
    onLogout={() => console.log('Logged out')}
    defaultAuthenticated={false}
  >
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
```

## Accessing Authentication State and Methods
To access the authentication state and methods (login and logout) in your components, use the useContext hook with AuthContext.

```jsx
import React, { useContext } from 'react';
import { AuthProvider } from "./context/AuthContext";

const MyComponent = () => {
  const { authenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {authenticated ? (
        <>
          <p>User is logged in</p>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <p>User is logged out</p>
          <button onClick={login}>Log in</button>
        </>
      )}
    </div>
  );
};

export default MyComponent;
```

## Props
The AuthProvider component accepts the following props:

children: The components that are wrapped by the AuthProvider.
onLogin: A callback function that is called when the login method is invoked.
onLogout: A callback function that is called when the logout method is invoked.
defaultAuthenticated: A boolean indicating the initial authentication state.
Contributing

Feel free to contribute by submitting pull requests or creating issues for bugs and feature requests.
