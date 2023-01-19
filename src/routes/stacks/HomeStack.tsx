import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTab } from '../tabs/BottomTab';

import { Wallet } from '../../pages/Wallet';
import { Transfer } from '../../pages/Transfer';

const { Navigator, Screen } = createNativeStackNavigator();

function HomeStack() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={BottomTab}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name="DetailCoin"
        component={Wallet}
      />
      <Screen
        name="Transfer"
        component={Transfer}
      />
    </Navigator>
  );
}

export default HomeStack;
