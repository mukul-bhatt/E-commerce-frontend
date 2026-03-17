import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import { cartSummary } from '../../../shared/constants/storefront';
import { Screen } from '../../../shared/ui/Screen';

export function CartScreen() {
  return (
    <Screen contentClassName="gap-4">
      <View>
        <Text className="text-3xl font-bold text-white">Cart</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Keep line items, coupons, delivery options, and checkout summary here.
        </Text>
      </View>

      <View className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <Text className="text-base text-slate-300">Items in cart</Text>
        <Text className="mt-2 text-4xl font-bold text-cyan-400">{cartSummary.itemCount}</Text>
        <Text className="mt-4 text-base text-slate-300">Subtotal</Text>
        <Text className="mt-1 text-2xl font-semibold text-white">{cartSummary.subtotal}</Text>
      </View>
    </Screen>
  );
}
