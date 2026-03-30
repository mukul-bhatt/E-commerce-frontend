import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Category, CatalogItem } from '../constants/mockData';
import { SubCategorySection } from './SubCategorySection';
import { LinearGradient } from 'expo-linear-gradient';

interface SubCategoryContentProps {
  category: Category;
  onItemPress?: (item: CatalogItem) => void;
}

export const SubCategoryContent: React.FC<SubCategoryContentProps> = ({
  category,
  onItemPress,
}) => {
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      {/* Category Header with Gradient */}
      <View className="mb-4">
        <LinearGradient
          colors={['#fdfcfd', '#EDD9E5', '#EDD9E5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="px-6 py-6"
        >
          <Text className="text-2xl font-bold text-purple-800">{category.name}</Text>
        </LinearGradient>
      </View>

      {/* Subcategory Sections */}
      {category.sections.length > 0 ? (
        category.sections.map((section) => (
          <SubCategorySection
            key={section.id}
            section={section}
            onItemPress={onItemPress}
          />
        ))
      ) : (
        <View className="flex-1 items-center justify-center py-20 px-10">
          <Text className="text-slate-400 text-center italic">
            No items available in this category.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};
