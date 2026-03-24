import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../theme/colors';
import { fonts } from '../../../../theme/typography';
import PriceRangeSlider from '../PriceRangeSlider';

const categories = ['Price', 'Brand', 'Size', 'Colour'];

const brandOptions = [
  'Apsara', 'Shein', 'Only',
  'Apsara', 'Shein', 'Only',
  'Apsara', 'Shein', 'Only'
];

const FilterModal = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Brand');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <View className="bg-white overflow-hidden">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <Text style={{ fontFamily: fonts.rubikBold }} className="text-xl text-black">
          Filter
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Divider */}
      <View className="h-[1px] bg-gray-100 w-full" />

      {/* Main Content Area */}
      <View className="flex-row min-h-[300px]">
        {/* Left Column: Categories */}
        <View className="w-[35%] border-r border-gray-100">
          <ScrollView showsVerticalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                className={`py-5 items-center justify-center ${
                  selectedCategory === category ? 'bg-primary' : 'bg-white'
                } border-b border-gray-100`}
              >
                <Text
                  style={{
                    fontFamily: selectedCategory === category ? fonts.rubikBold : fonts.rubik,
                    color: selectedCategory === category ? 'white' : 'black',
                  }}
                  className="text-base"
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Right Column: Options */}
        <View className="w-[65%] p-4">

            {selectedCategory === "Brand" && <Brand selectedBrands={selectedBrands} toggleBrand={toggleBrand} />}
            {selectedCategory === "Price" && <PriceRangeSlider />}
            {/* {selectedCategory === "Gender" && <Gender />}
            {selectedCategory === "Trending" && <Trending />} */}
           

        </View>
      </View>

      {/* Horizontal Divider */}
      <View className="h-[1px] bg-gray-100 w-full" />

      {/* Footer Buttons */}
      <View className="flex-row gap-4 px-6 py-4">
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.7}
          className="flex-1 py-4 rounded-xl items-center border"
          style={{ borderColor: colors.primary }}
        >
          <Text
            style={{ fontFamily: fonts.rubikBold, color: colors.primary }}
            className="text-lg"
          >
            CLEAR ALL
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="flex-1 py-4 rounded-xl items-center"
          style={{ backgroundColor: colors.primary }}
        >
          <Text
            style={{ fontFamily: fonts.rubikBold }}
            className="text-white text-lg"
          >
            APPLY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterModal;


const Brand = ({selectedBrands, toggleBrand}: {selectedBrands: string[], toggleBrand: (brand: string) => void}) => {


    return (
         <View className="flex-row flex-wrap gap-2 justify-center">
              {brandOptions.map((brand, index) => (
                <TouchableOpacity
                  key={index}
                  className={`w-[30%] py-2 border rounded-lg bg-white items-center ${
                    selectedBrands.includes(brand)
                      ? 'border-primary bg-primary/10'
                      : 'border-gray-200'
                  }`}
                  onPress={() => toggleBrand(brand)}
                >
                  <Text
                    style={{
                      fontFamily: selectedBrands.includes(brand)
                        ? fonts.rubikBold
                        : fonts.rubik,
                      color: selectedBrands.includes(brand)
                        ? colors.primary
                        : 'black',
                    }}
                    className="text-xs"
                    numberOfLines={1}
                  >
                    {brand}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
    )
}
