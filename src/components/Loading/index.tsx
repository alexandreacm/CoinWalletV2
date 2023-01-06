import React from 'react';
import { useTheme } from 'styled-components/native';

import { ActivityIndicator } from 'react-native';

import { StyledBackground } from './styles';

export default function Loading() {
  const { COLORS } = useTheme();
  return (
    <StyledBackground>
      <ActivityIndicator size="large" color={COLORS.PRIMARY_COLOR} />
    </StyledBackground>
  );
}
