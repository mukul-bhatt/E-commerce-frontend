import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import { featuredCategories } from '../../../shared/constants/storefront';
import { Screen } from '../../../shared/ui/Screen';

export function CatalogScreen() {
  return (
    <Screen scroll contentClassName="gap-4">
      <View>
        <Text className="text-3xl font-bold text-white">Catalog</Text>
        <Text className="mt-2 text-sm text-slate-400">
          Keep product lists, filters, search, and product cards under this feature.
        </Text>
      </View>

      {featuredCategories.map((category) => (
        <View
          key={category.name}
          className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4"
        >
          <Text className="text-lg font-semibold text-white">{category.name}</Text>
          <Text className="mt-1 text-sm text-slate-400">{category.itemCount}</Text>
        </View>
      ))}
    </Screen>
  );
}
