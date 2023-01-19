import styled, { css } from 'styled-components/native';

import spacings from '../../theme/spacings';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: 'montserrat';
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: spacings.SMALL,
  },
})`
  background-color: #fff;
`;

export const StyledEmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

export const StyledEmptyList = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const StyledEmptyListView = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

export const StyledEmptyListText = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'montserrat-bold';
`;

export const LeftSide = styled.View`
  width: 70px;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #cdcdcd;
`;

export const ViewIcon = styled.View`
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
`;

export const ImgIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3px;
`;

export const Name = styled.Text`
  width: 40%;
  font-size: 14px;
  text-align: left;
  font-family: 'montserrat-bold';
`;

export const Price = styled.Text`
  width: 60%;
  font-size: 14px;
  text-align: right;
  padding-right: 30px;
  font-family: 'montserrat-bold';
`;

export const Percent = styled.Text`
  width: 100px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: green;
  font-family: 'montserrat';
`;

export const PriceUsd = styled.Text`
  width: 30%;
  font-size: 14px;
  text-align: left;
  padding-right: 30px;
  color: #808080;
  font-family: 'montserrat-bold';
`;

export const RightSideViewHeader = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const RightSideViewBottom = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const PercentChange24h = styled.Text`
  width: 70%;
  font-size: 14px;
  text-align: left;
  color: green;
  font-family: 'montserrat';
`;
