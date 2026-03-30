import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { OrderItem } from '../constants/orderMockData';

interface OrderActionSectionProps {
  item: OrderItem;
}

export const OrderActionSection: React.FC<OrderActionSectionProps> = ({ item }) => {
  const renderStars = (rating?: number) => (
    <View className="flex-row gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Ionicons
          key={star}
          name={rating && star <= rating ? 'star' : 'star-outline'}
          size={20}
          color={rating && star <= rating ? '#FFC107' : '#94A3B8'}
        />
      ))}
    </View>
  );

  switch (item.actionType) {
    case 'delivery':
      return (
        <View className="flex-row items-center gap-2 pt-4 border-t border-slate-100 border-dashed">
          <FontAwesome5 name="shipping-fast" size={14} color="#16A34A" />
          <Text className="text-[11px] text-green-600 font-medium">
            Delivery by {item.actionDate}
          </Text>
        </View>
      );
    case 'pickup':
      return (
        <View className="flex-row items-center gap-2 pt-4 border-t border-slate-100 border-dashed">
          <FontAwesome5 name="shipping-fast" size={14} color="#16A34A" />
          <Text className="text-[11px] text-green-600 font-medium">
            Estimated pickup by {item.actionDate}
          </Text>
        </View>
      );
    case 'rate':
      return (
        <View className="pt-4 border-t border-slate-100 border-dashed">
          <Text className="text-[11px] text-slate-600 font-medium mb-2">Rate your Product</Text>
          {renderStars()}
        </View>
      );
    case 'review':
      return (
        <View className="pt-4 border-t border-slate-100 border-dashed">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-[11px] text-slate-600 font-medium mb-2">Your Rating</Text>
              {renderStars(item.rating)}
            </View>
            <TouchableOpacity className="border border-primary rounded-md px-3 py-2">
              <Text className="text-[11px] text-primary font-bold">Edit your review</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    case 'refund_bank':
      return (
        <View className="flex-row items-center gap-2 pt-4 border-t border-slate-100 border-dashed">
          <Ionicons name="receipt-outline" size={16} color="#64748B" />
          <Text className="text-[11px] text-slate-600">
            Refund initiated in your bank account on {item.actionDate}
          </Text>
        </View>
      );
    case 'refund_wallet':
      return (
        <View className="flex-row items-center gap-2 pt-4 border-t border-slate-100 border-dashed">
          <Ionicons name="wallet-outline" size={16} color="#64748B" />
          <Text className="text-[11px] text-slate-600">
            Refund initiated in your wallet on {item.actionDate}
          </Text>
        </View>
      );
    default:
      return null;
  }
};
