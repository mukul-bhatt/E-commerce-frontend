import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './BottomTabNavigator';

const RootStack = createNativeStackNavigator({
  screens: {
    MainTabs: {
      screen: MainTabs,
      options: {
        headerShown: false,
      },
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
