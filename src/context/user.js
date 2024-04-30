// src/context/user.js
import React, { useState } from 'react';
import user from '../data'


const UserContext = React.createContext();
// create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('dark');
  return (
    <UserContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };