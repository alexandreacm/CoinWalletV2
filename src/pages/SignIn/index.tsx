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
  user: Auth;
};

export function SignIn({ signIn, user }: Props) {
  const [email, setEmail] = useState<string>('alex@gmail.com');
  const [password, setPassword] = useState<string>('');

  function handleOnLogin() {
    signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Welcome</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation="fadeInDown">
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input} placeholder="email" value={email} onChangeText={setEmail} />

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
  const { signIn, user } = useAuthContext();

  return <SignIn signIn={signIn} user={user} {...props} />;
}
