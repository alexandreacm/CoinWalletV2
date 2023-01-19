import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import WelCome from '../../pages/WelCome';
import LoginIn from '../../pages/LoginIn';
import { Wallet } from '../../pages/Wallet';
import { Home } from '../../pages/Home';

function AuthStack() {
  return (
    <Navigator>
      <Screen
        name="WelCome"
        component={WelCome}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Screen
        name="SignIn"
        component={LoginIn}
      />
      <Screen
        name="DetailCoin"
        component={Wallet}
      />
      <Screen
        name="HomeLogged"
        component={Home}
      />
    </Navigator>
  );
}

export default AuthStack;
