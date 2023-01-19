import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import {
  Container,
  StyledEmptyList,
  StyledEmptyListView,
  StyledEmptyListText,
  FlatList,
  ViewIcon,
  LeftSide,
  RightSide,
  ImgIcon,
  CardContainer,
  Name,
  Price,
  PriceUsd,
  RightSideViewHeader,
  RightSideViewBottom,
  PercentChange24h,
} from './styles';

import empty from '@assets/animations/empty-list';
import icDefault from '@assets/icons/default.png';
import { coinImage, formatMoney } from '@helpers/functions/utils/';

import { CoinData } from 'src/types';
import { useGetTickersQuery } from '../../service/tickerApi';

import Lottie from 'lottie-react-native';
import Loading from '@components/Loading';

type Navigation = NativeStackHeaderProps;

export function Coins({ navigation }: Navigation) {
  const { data, isLoading, error, isSuccess } = useGetTickersQuery();

  function renderEmptyList() {
    if (!isLoading && !data) return;

    return (
      <>
        <StyledEmptyList>
          {/* <Lottie source={empty} loop autoPlay resizeMode="contain" /> */}
          <StyledEmptyListView>
            <StyledEmptyListText>There is no data!</StyledEmptyListText>
          </StyledEmptyListView>
        </StyledEmptyList>
      </>
    );
  }

  function renderItem({ item }: { item: CoinData }) {
    return (
      <CardContainer activeOpacity={0.8} onPress={() => navigation.navigate('DetailCoin', { id: item?.id })}>
        <LeftSide>
          <ViewIcon>
            <ImgIcon source={coinImage[item?.symbol] || icDefault} resizeMode="contain" />
          </ViewIcon>
        </LeftSide>
        <RightSide>
          <RightSideViewHeader>
            <Name>{item.name}</Name>
            <Price>
              {formatMoney(item?.price_btc)} - {item?.symbol}
            </Price>
          </RightSideViewHeader>
          <RightSideViewBottom>
            <PriceUsd>{formatMoney(item?.price_usd)}</PriceUsd>
            <PercentChange24h>{item?.percent_change_24h}%</PercentChange24h>
          </RightSideViewBottom>
        </RightSide>
      </CardContainer>
    );
  }

  useEffect(() => {
    // dispatch(LOADING_COINS());
  }, []);

  return (
    <Container>
      {isLoading && !isSuccess ? (
        <Loading isLoading={isLoading} />
      ) : (
        <FlatList
          data={data?.data}
          keyExtractor={(item: any) => item.id}
          ListEmptyComponent={renderEmptyList}
          renderItem={renderItem}
        />
      )}

      {
        error && (
          <View>
            <Text>Something went worng</Text>
          </View>
        )
      }
    </Container>
  );
}
