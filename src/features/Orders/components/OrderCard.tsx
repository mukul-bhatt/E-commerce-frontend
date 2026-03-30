import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { OrderItem } from '../constants/orderMockData';
import { OrderStatusBadge } from './OrderStatusBadge';
import { OrderActionSection } from './OrderActionSection';

interface OrderCardProps {
  item: OrderItem;
  onPress?: (item: OrderItem) => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({ item, onPress }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('OrderDetails', { orderId: item.orderId });
    onPress?.(item);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="bg-white rounded-xl border border-slate-100 mb-6 p-4 shadow-sm"
    >
      {/* Card Header: Status and Order ID */}
      <View className="flex-row justify-between items-center mb-4">
        <OrderStatusBadge status={item.status} isPrepaid={item.isPrepaid} />
        <Text className="text-[10px] text-slate-500 font-medium">ORDER ID #{item.orderId}</Text>
      </View>

      {/* Product Content Area */}
      <View className="flex-row gap-4 mb-4">
        <View className="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden">
          <Image
            source={{ uri: item.productImage }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex-1 justify-center">
          <Text className="text-[13px] font-bold text-slate-900 mb-1 leading-tight" numberOfLines={2}>
            {item.productName}
          </Text>
          <Text className="text-[11px] text-slate-600 mb-1 font-medium">Sold By: {item.sellerName}</Text>
          <Text className="text-[11px] text-slate-400">{item.variant}</Text>
        </View>
        <View className="justify-center">
          <View className="w-6 h-6 rounded-full border border-purple-200 items-center justify-center">
            <Entypo name="chevron-right" size={14} color="#7C3AED" />
          </View>
        </View>
      </View>

      {/* Footer / Dynamic Action Section */}
      <OrderActionSection item={item} />
    </TouchableOpacity>
  );
};
