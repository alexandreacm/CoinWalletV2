import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';

import { saveUser } from '../../src/constants/storage';
import { Auth } from 'src/types';

export default function Routes() {
  const { getItem } = useAsyncStorage(saveUser);
  const [user, setUser] = useState<Auth>({} as Auth);

  useEffect(() => {
    async function loadData() {
      const response = await getItem();
      console.log('response: ', response);
    }

    loadData();
  }, []);

  return user !== null ? <HomeStack /> : <AuthStack />;
}
