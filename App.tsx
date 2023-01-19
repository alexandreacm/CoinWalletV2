import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import theme from './src/theme';

import { store } from '@store';
import AuthProvider from '@contexts/AuthProvider';
import { useFontResource } from '@hooks/useFontResource';

export default function App() {
  const isLoading = useFontResource();

  if (isLoading) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    )
  }
}
