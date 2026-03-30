import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Category } from '../constants/mockData';

interface CategorySidebarProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
}) => {
  return (
    <View className="w-24 bg-white border-r border-slate-100">
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedCategoryId;
          return (
            <TouchableOpacity
              onPress={() => onSelectCategory(item.id)}
              className={`items-center py-4 px-2 border-l-4 ${
                isSelected ? 'border-purple-600 bg-purple-50' : 'border-transparent'
              }`}
            >
              <View className="w-12 h-12 rounded-full bg-slate-50 items-center justify-center mb-2 overflow-hidden">
                <Image
                  source={{ uri: item.icon }}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
              <Text
                className={`text-[10px] text-center font-medium ${
                  isSelected ? 'text-purple-600' : 'text-slate-600'
                }`}
                numberOfLines={2}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
