import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { fonts } from '../../../../theme/typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ReviewProduct = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Content */}
      <View className="flex-1 items-center justify-center px-10">
        <Image 
          source={require("../../../../../assets/Review/handSignReview.png")}
          className="w-48 h-48 mb-10"
          resizeMode="contain"
        />

        <Text 
          className="text-xl text-center mb-4" 
          style={{ fontFamily: fonts.rubikBold }}
        >
          You can’t submit a review
        </Text>

        <Text 
          className="text-gray-500 text-center text-base leading-6 mb-10" 
          style={{ fontFamily: fonts.rubik }}
        >
          You can only review the product after purchasing it
        </Text>

        <TouchableOpacity 
          onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
          className="w-full bg-primary h-14 rounded-xl items-center justify-center shadow-lg"
        >
          <Text 
            className="text-white text-lg" 
            style={{ fontFamily: fonts.rubikMedium }}
          >
            Start Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReviewProduct;
