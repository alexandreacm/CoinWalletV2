import React from 'react';
import { Platform } from 'react-native';

import { useTheme } from 'styled-components/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';

import { History } from '../../pages/History';

import { CustomTabButton } from '@components/CustomTabButton';
import { MaterialTopTab } from './MaterialTopTab';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTab() {
  const COLORS = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 0 : 0,
        },
      }}
    >
      <Screen
        name="HomeTab"
        component={MaterialTopTab}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => <Entypo name="home" size={25} color={color} />,
        }}
      />
      <Screen
        name="Wallet"
        component={History}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="wallet" size={25} color={color} />,
        }}
      />
      <Screen
        name="QrCode"
        component={History}
        options={{
          title: '',
          tabBarIcon: () => <CustomTabButton />,
        }}
      />
      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused, color }) => <Ionicons name="timer" size={25} color={color} />,
        }}
      />
      <Screen
        name="Tranfer"
        component={History}
        options={{
          tabBarIcon: ({ focused, color }) => <FontAwesome name="money" size={25} color={color} />,
        }}
      />
    </Navigator>
  );
}
