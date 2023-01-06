import styled, { css } from 'styled-components/native';
import useFontFamily from '@hooks/useFontFamily';

export const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
`;

export const ContainerBody = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.FORM};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -25px;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #fff;
  text-align: center;
  font-family: ${useFontFamily(700)};
`;
