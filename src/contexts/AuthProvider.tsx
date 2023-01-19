import React, { createContext, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { saveUser } from '../constants/storage';

import { Auth } from 'src/types';

export const AuthContext = createContext({
  user: {},
  SignIn: () => { },
  SignOut: () => { }
});

const USER: Auth = {
  email: '',
  status: false
}

function AuthProvider({ children }: any) {
  const { setItem, getItem } = useAsyncStorage(saveUser);
  const [user, setUser] = useState<Auth>(USER);

  const { navigate } = useNavigation();

  async function SignIn(email: string, password: string) {

    if (email === '' || password === '') return;

    if (email !== '' && password !== '') {
      setUser({
        email: email,
        status: true
      });

      await setItem(JSON.stringify(user));
      navigate('Home');
    }
  }

  async function SignOut() {
    setUser(USER)
  }

  return (
    <AuthContext.Provider value={{ user, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider;


export function useAuthContext() {
  const { user, SignIn, SignOut } = useContext(AuthContext);

  return { user, SignIn, SignOut };
}

