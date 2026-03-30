import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CatalogItem } from '../constants/mockData';

interface CategoryItemProps {
  item: CatalogItem;
  onPress?: (item: CatalogItem) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(item)}
      className="w-[25%] items-center mb-6 px-1"
    >
      <View className="w-full aspect-square bg-slate-200 rounded-lg mb-2 overflow-hidden items-center justify-center">
        {/* Placeholder if image fails or for now */}
        <View className="w-full h-full bg-slate-200" />
      </View>
      <Text className="text-[10px] text-center text-slate-800" numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
