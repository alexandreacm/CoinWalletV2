import { useDispatch } from 'react-redux';

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useFocusEffect: jest.fn(),
    useNavigation: jest.fn(() => jest.fn),
    useRoute: () => ({
      params: {
        id: jest.fn,
      },
    }),
    useIsFocused: jest.fn(),
  };
});

// jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
// jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-redux');

useDispatch.mockReturnValue(jest.fn);
