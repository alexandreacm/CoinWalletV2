import styled, { css } from 'styled-components/native';
import useFontFamily from '@hooks/useFontFamily';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${useFontFamily(400)};
`;
