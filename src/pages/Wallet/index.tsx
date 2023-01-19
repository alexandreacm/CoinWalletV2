import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useRoute } from '@react-navigation/native';

import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';

import { Container } from './styles';

export function Wallet() {
  const { COLORS } = useTheme();

  const {
    params: { id },
  } = useRoute();

  useEffect(() => {
    // dispatch(FINDING_COIN({ id }));
  }, []);

  return (
    <Container>
      <Text>Graphic</Text>
      {/* <VictoryChart theme={VictoryTheme.material} width={400}>
        <VictoryLine
          interpolation="basis"
          style={{
            data: { stroke: COLORS.PRIMARY_COLOR },
          }}
          data={[
            { x: 9.31, y: '24h' },
            { x: 1.54, y: '1h' },
            { y: 0.9, y: '1d' },
          ]}
          animate={{
            duration: 500,
            easing: 'elastic',
          }}
        />
      </VictoryChart> */}
    </Container>
  );
}
