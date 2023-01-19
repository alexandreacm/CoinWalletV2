import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { styles } from './styles';
import { useAuthContext } from '@contexts/AuthProvider';
import { Auth } from 'src/types';


type Props = {
  signIn: (email: string, password: string) => void;
  SignOut: () => void;
};

export function LoginIn({ signIn, SignOut }: Props) {
  const [email, setEmail] = useState<string>('alex@gmail.com');
  const [password, setPassword] = useState<string>('123123');

  function handleOnLogin() {
    signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Welcome</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation="fadeInUp">
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleOnLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Do not have an account yet?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

export default function (props: any) {
  const { SignIn, SignOut } = useAuthContext();

  return <LoginIn signIn={SignIn} SignOut={SignOut} {...props} />;
}
