import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import WelCome from '../../pages/WelCome';
import SignIn from '../../pages/SignIn';
import { Wallet } from '../../pages/Wallet';
import { BottomTab } from '../tabs/BottomTab';

function HomeStack() {
  return (
    <Navigator>
      <Screen name="WelCome" component={WelCome} />
      <Screen name="SignIn" component={SignIn} />
      <Screen
        name="DetailCoin"
        component={Wallet}
        options={{
          title: '',
          header: () => {},
        }}
      />
    </Navigator>
  );
}

export default HomeStack;
