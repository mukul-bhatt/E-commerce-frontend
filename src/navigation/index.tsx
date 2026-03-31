import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { RootStack } from './RootStackNavigator';
import AuthStack from './AuthNavigation';
import { tokenStorage } from '../services/storage/tokenStorage';

// Note: tokenStorage.getAccessToken() returns a Promise, which is always an object (truthy).
// This is why you always saw the main app! To properly check for tokens at launch, you 
// should handle this state asynchronously in your App hook.
// For now, to test the auth flow, we are hardcoding it to null:
const authToken = null;
//  const authToken = tokenStorage.getAccessToken();

export const Navigation = createStaticNavigation(authToken !== null ? RootStack : AuthStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
