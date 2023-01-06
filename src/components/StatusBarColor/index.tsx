import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

type Props = {
  backgroundColor: string;
};

const StatusBarColor = ({ backgroundColor, ...rest }: Props) => {
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar barStyle="light-content" translucent backgroundColor={backgroundColor} {...rest} />
    </SafeAreaView>
  );
};

export default StatusBarColor;

export const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
