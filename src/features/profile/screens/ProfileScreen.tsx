import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import { Screen } from '../../../shared/ui/Screen';

export function ProfileScreen() {
  return (
    <Screen contentClassName="gap-4">
      <View>
        <Text className="text-3xl font-bold text-white">Profile</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Account details, addresses, orders, wishlist, and settings belong in this feature.
        </Text>
      </View>

      <View className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <Text className="text-lg font-semibold text-white">Recommended next modules</Text>
        <Text className="mt-3 text-sm text-slate-300">Order history</Text>
        <Text className="mt-2 text-sm text-slate-300">Saved addresses</Text>
        <Text className="mt-2 text-sm text-slate-300">Payment methods</Text>
        <Text className="mt-2 text-sm text-slate-300">Wishlist</Text>
      </View>
    </Screen>
  );
}
