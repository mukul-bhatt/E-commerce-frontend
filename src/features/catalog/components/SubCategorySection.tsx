import React from 'react';
import { View, Text } from 'react-native';
import { CatalogSection, CatalogItem as CatalogItemType } from '../constants/mockData';
import { CategoryItem } from './CategoryItem';

interface SubCategorySectionProps {
  section: CatalogSection;
  onItemPress?: (item: CatalogItemType) => void;
}

export const SubCategorySection: React.FC<SubCategorySectionProps> = ({
  section,
  onItemPress,
}) => {
  return (
    <View className="mb-6">
      <Text className="text-sm font-bold text-slate-900 mb-4 px-4">{section.title}</Text>
      <View className="flex-row flex-wrap px-2">
        {section.items.map((item) => (
          <CategoryItem key={item.id} item={item} onPress={onItemPress} />
        ))}
      </View>
    </View>
  );
};
