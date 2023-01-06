import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { BottomTab } from '../tabs/BottomTab';
import { Wallet } from 'src/pages/Wallet';
import { Transfer } from 'src/pages/Transfer';

function HomeStack() {
  return (
    <Navigator>
      <Screen
        name="HomeLogged"
        component={BottomTab} />
      <Screen name="DetailCoin" component={Wallet} />
      <Screen name="Transfer" component={Transfer} />
    </Navigator>
  );
}

export default HomeStack;
