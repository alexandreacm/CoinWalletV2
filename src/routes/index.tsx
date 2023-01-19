import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';

import { saveUser } from '../../src/constants/storage';
import { Auth } from 'src/types';

export default function Routes() {
  const { getItem } = useAsyncStorage(saveUser);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadData() {
      // await AsyncStorage.removeItem(saveUser);
      const userLocal = await getItem();

      // console.log(userLocal);
      // console.log(user);

      if (userLocal !== null) {
        const user = JSON.parse(userLocal);
        setUser(user);
      }
    }

    loadData();
  }, []);

  return user !== null ? <HomeStack /> : <AuthStack />;
}
