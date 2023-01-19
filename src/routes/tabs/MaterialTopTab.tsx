import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Coins } from '../../pages/Coins';
import { History } from '../../pages/History';

import {
  ContainerHeader,
  AvailableBalance,
  AvailableBalanceTitle,
  ContainerVerticalButtons,
  RoundButton,
  ButtonTitle,
  ContainerVerticalTextButtons,
} from './styles';

import { saveUser } from '../../../src/constants/storage';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function MaterialTopTab() {
  const { getItem } = useAsyncStorage(saveUser);
  const [user, setUser] = useState<string>('');


  useEffect(() => {

    // async function loadDataUser() {
    //   const response = await getItem();
    //   // console.log('loadDataUser-response: ', response);

    //   response ? setUser(response) : '';
    // }

    //loadDataUser();
  }, []);

  return (
    <>
      <ContainerHeader>
        <AvailableBalance>$0.00</AvailableBalance>
        <AvailableBalanceTitle>{user}</AvailableBalanceTitle>
        <AvailableBalanceTitle>My Wallet</AvailableBalanceTitle>

        <ContainerVerticalButtons>
          <ContainerVerticalTextButtons>
            <RoundButton>
              <Ionicons name="arrow-up" size={25} color="#FFF" />
            </RoundButton>
            <ButtonTitle>Send</ButtonTitle>
          </ContainerVerticalTextButtons>

          <ContainerVerticalTextButtons>
            <RoundButton>
              <Ionicons name="arrow-down" size={25} color="#FFF" />
            </RoundButton>
            <ButtonTitle>Receive</ButtonTitle>
          </ContainerVerticalTextButtons>

          <ContainerVerticalTextButtons>
            <RoundButton>
              <Feather name="tag" size={25} color="#FFF" />
            </RoundButton>
            <ButtonTitle>Buy</ButtonTitle>
          </ContainerVerticalTextButtons>

          <ContainerVerticalTextButtons>
            <RoundButton>
              <Entypo name="share" size={25} color="#FFF" />
            </RoundButton>
            <ButtonTitle>Trade</ButtonTitle>
          </ContainerVerticalTextButtons>
        </ContainerVerticalButtons>
      </ContainerHeader>

      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
        }}
      >
        <Screen name="BTC" component={Coins} />
        <Screen name="History BTC" component={History} />
      </Navigator>
    </>
  );
}
