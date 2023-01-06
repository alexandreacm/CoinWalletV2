import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { ContainerButton } from './styles';

export function CustomTabButton() {
  return (
    <ContainerButton>
      <FontAwesome name="qrcode" size={30} color="#FFF" />
    </ContainerButton>
  );
}
