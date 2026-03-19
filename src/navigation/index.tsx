import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './BottomTabNavigator';
import FashionScreen from '../features/home/screens/FashionScreen';
import { fontFamily } from '../theme/typography';

const RootStack = createNativeStackNavigator({
  screens: {
    MainTabs: {
      screen: MainTabs,
      options: {
         headerShown: false,
      },
    },
    Fashion: {
      screen: FashionScreen,
      options: {
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: fontFamily.rubikMedium,
        },
      }
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
