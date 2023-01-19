import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import icLogo from '../../assets/images/logo.png';
import { styles } from './styles';

export default function WelCome() {
  const { navigate } = useNavigation();

  function onHandleNavigate() {
    navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image animation="fadeInDown" source={icLogo} resizeMode="contain" />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>
          CoinWallet is official Bitcoin wallet where you can monitory prices of BTC
        </Text>

        <Text style={styles.subTitle}>Login to start</Text>

        <TouchableOpacity style={styles.button} onPress={onHandleNavigate}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
