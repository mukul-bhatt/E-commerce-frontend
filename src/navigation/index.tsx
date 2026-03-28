import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { RootStack } from './RootStackNavigator';
import AuthStack from './AuthNavigation';
import { tokenStorage } from '../services/storage/tokenStorage';

const authToken = tokenStorage.getAccessToken();

export const Navigation = createStaticNavigation(authToken !== null ? RootStack : AuthStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
