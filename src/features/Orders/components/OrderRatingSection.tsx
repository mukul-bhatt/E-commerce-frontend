import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';

interface OrderRatingSectionProps {
  productName: string;
  productImage: string;
}

const OrderRatingSection = ({ productName, productImage }: OrderRatingSectionProps) => {
  return (
    <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
      <Text className="text-[13px] font-bold text-slate-900 mb-4">Rate your Order</Text>
      
      <View className="flex-row items-center gap-4 mb-4">
        <Image
          source={{ uri: productImage }}
          className="h-12 w-12 rounded-lg bg-slate-50"
        />
        <View className="flex-1">
          <Text className="text-[13px] text-slate-700 font-medium mb-1 truncate" numberOfLines={1}>
            {productName}
          </Text>
          <View className="flex-row gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= 4 ? 'star' : 'star-outline'}
                size={20}
                color={star <= 4 ? '#FFD700' : '#D1D5DB'}
              />
            ))}
          </View>
        </View>
      </View>

      <View className="mb-2">
        <Text className="text-[10px] text-slate-400 mb-2">Additional Comments</Text>
        <View className="flex-row gap-3">
          <View className="flex-1">
            <TextInput
              placeholder="What did you like or dislike about this product?"
              placeholderTextColor="#94a3b8"
              className="bg-white border border-slate-200 rounded-lg p-3 text-[12px] h-20 text-black"
              multiline
              textAlignVertical="top"
            />
          </View>
          <TouchableOpacity 
            className="h-20 w-16 bg-slate-50 border border-slate-200 rounded-lg items-center justify-center border-dashed"
          >
            <Feather name="camera" size={24} color="#64748b" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderRatingSection;
