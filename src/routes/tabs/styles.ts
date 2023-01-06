import styled, { css } from 'styled-components/native';
import useFontFamily from '@hooks/useFontFamily';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 330px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  justify-content: center;
  align-items: center;
  padding: 8px;
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

export const AvailableBalance = styled.Text`
  font-size: 35px;
  color: #fff;
  text-align: center;
  font-family: ${useFontFamily(700)};
`;

export const AvailableBalanceTitle = styled.Text`
  font-size: 16px;
  color: #f3f3f3;
  text-align: center;
  font-family: ${useFontFamily(400)};
`;

export const ContainerVerticalButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  top: 12px;
`;

export const ContainerVerticalTextButtons = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export const RoundButton = styled.TouchableOpacity`
  width: 60px;
  padding: 18px;
  border-radius: 50px;
  background-color: rgba(135, 206, 250, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  width: 100%;
  font-size: 14px;
  color: #f3f3f3;
  font-family: ${useFontFamily(500)};
  text-align: center;
  margin-top: 5px;
`;
