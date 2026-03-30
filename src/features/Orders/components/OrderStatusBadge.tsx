import React from 'react';
import { View, Text } from 'react-native';
import { OrderStatus } from '../constants/orderMockData';

interface OrderStatusBadgeProps {
  status: OrderStatus;
  isPrepaid?: boolean;
}

export const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ status, isPrepaid }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Out for delivery':
      case 'Return Initiated':
        return 'bg-primary text-white';
      case 'Delivered':
        return 'bg-green-600 text-white';
      case 'Cancelled':
        return 'bg-red-600 text-white';
      case 'Return':
        return 'bg-orange-400 text-white';
      default:
        return 'bg-slate-200 text-slate-800';
    }
  };

  return (
    <View className="flex-row items-center gap-2">
      <View className={`${getStatusStyles()} px-3 py-1 rounded-md`}>
        <Text className={`text-[10px] font-bold ${status === 'Return' ? 'text-slate-900' : 'text-white'} uppercase`}>
          {status}
        </Text>
      </View>
      {isPrepaid && (
        <View className="bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
          <Text className="text-[10px] text-slate-600 font-medium">Prepaid Order</Text>
        </View>
      )}
    </View>
  );
};
