import React from 'react';
import { useTheme } from 'styled-components/native';

import { ActivityIndicator } from 'react-native';

import { StyledBackground } from './styles';

type Props = {
  isLoading: boolean;
}

export default function Loading({ isLoading }: Props) {
  const { COLORS } = useTheme();

  if (!isLoading) return null;

  return (
    <StyledBackground>
      <ActivityIndicator size="large" color={COLORS.PRIMARY_COLOR} />
    </StyledBackground>
  );
}
