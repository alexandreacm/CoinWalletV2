import styled, { css } from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  ${({ theme }) => css`
      background-color:  ${theme.COLORS.PRIMARY_COLOR};
  `}
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
  font-family: 'montserrat-bold'
`;

export const AvailableBalanceTitle = styled.Text`
  font-size: 16px;
  color: #f3f3f3;
  text-align: center;
  font-family: 'montserrat'
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
  font-family: 'montserrat-bold';
  text-align: center;
  margin-top: 5px;
`;
