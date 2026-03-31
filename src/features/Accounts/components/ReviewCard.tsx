import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ReviewCardProps {
  productImage: any;
  productName: string;
  rating: number;
  reviewTitle: string;
  reviewBody: string;
  postedDate: string;
}

import { useNavigation } from '@react-navigation/native';

const ReviewCard = ({ 
  productImage, 
  productName, 
  rating, 
  reviewTitle, 
  reviewBody, 
  postedDate 
}: ReviewCardProps) => {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-row bg-white mx-4 mb-3 p-5 rounded-2xl border border-gray-100 shadow-md elevation-2">

      {/* Product Image */}
      <Image 
        source={productImage}
        className="w-24 h-24 rounded-2xl bg-gray-50"
        resizeMode="cover"
      />

      
      {/* Review Details */}
      <View className="flex-1 ml-4">
        <View className="flex-row justify-between items-start mb-1">
          <Text className="text-[13px] text-gray-500 font-medium flex-1 mr-2" numberOfLines={1}>
            {productName}
          </Text>
          <TouchableOpacity 
            hitSlop={10} 
            onPress={() => navigation.navigate('EditReview', { 
              review: { productImage, productName, rating, reviewTitle, reviewBody, postedDate } 
            })}
          >
            <Text className="text-[11px] text-gray-900 font-bold uppercase">Edit</Text>
          </TouchableOpacity>

        </View>
        
        {/* Rating Badge */}
        <View className="flex-row items-center bg-[#2E7D32] self-start px-2 py-0.5 rounded-md mb-2">
          <Text className="text-white text-[10px] font-bold mr-1">{rating}</Text>
          <MaterialCommunityIcons name="star" size={10} color="white" />
        </View>
        
        <Text className="text-[14px] font-bold text-gray-900 mb-1 leading-5">
          {reviewTitle}
        </Text>
        
        <Text className="text-[11px] text-gray-500 leading-4 mb-2" numberOfLines={2}>
          {reviewBody}
        </Text>
        
        <Text className="text-[10px] text-gray-400 font-medium">
          Posted {postedDate}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;
