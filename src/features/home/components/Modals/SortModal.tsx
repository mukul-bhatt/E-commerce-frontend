import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../theme/colors';
import { fonts } from '../../../../theme/typography';

const sortOptions = [
  "Price (Low to High)",
  "Price (High to Low)",
  "Rating (High to low)",
  "Rating (Low to High)",
];

const SortModal = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const navigation = useNavigation();

  return (
    <View className="bg-white p-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text style={{ fontFamily: fonts.rubikBold }} className="text-xl text-black">
          Sort by
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Options list */}
      <View className="mb-8">
        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setSelectedOption(option)}
            activeOpacity={0.7}
            className="flex-row items-center mb-5"
          >
            <MaterialCommunityIcons
              name={selectedOption === option ? "radiobox-marked" : "radiobox-blank"}
              size={24}
              color="black"
            />
            <Text
              style={{ fontFamily: fonts.rubik }}
              className="ml-3 text-lg text-gray-700"
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Apply Button */}
      <TouchableOpacity
        className="py-4 rounded-xl items-center mt-auto"
        style={{ backgroundColor: colors.primary }}
        activeOpacity={0.8}
      >
        <Text
          style={{ fontFamily: fonts.rubikBold }}
          className="text-white text-lg font-bold tracking-widest"
        >
          APPLY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SortModal;