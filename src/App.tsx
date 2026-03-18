import { Navigation } from './navigation';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}
