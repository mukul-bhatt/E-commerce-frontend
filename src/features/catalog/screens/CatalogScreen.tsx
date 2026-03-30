import React, { useState } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { CATALOG_DATA, Category } from '../constants/mockData';
import { CategorySidebar } from '../components/CategorySidebar';
import { SubCategoryContent } from '../components/SubCategoryContent';

export function CatalogScreen() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATALOG_DATA[8].id); // Default to Furniture as per image

  const selectedCategory = CATALOG_DATA.find((cat) => cat.id === selectedCategoryId) || CATALOG_DATA[0];

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Main Content Area */}
      <View className="flex-1 flex-row pt-4">
        {/* Left Sidebar */}
        <CategorySidebar
          categories={CATALOG_DATA}
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={handleSelectCategory}
        />

        {/* Right Content */}
        <SubCategoryContent
          category={selectedCategory}
          onItemPress={(item) => console.log('Item Pressed:', item.name)}
        />
      </View>
    </View>
  );
}
