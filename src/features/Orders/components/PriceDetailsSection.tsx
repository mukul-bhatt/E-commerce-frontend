import React from 'react';
import { View, Text } from 'react-native';

interface PriceDetailsSectionProps {
  itemsCount: number;
  totalPrice: number;
  discount: number;
  couponDiscount: number;
  platformFees: number;
  deliveryCharges: number;
}

const PriceDetailsSection = ({
  itemsCount,
  totalPrice,
  discount,
  couponDiscount,
  platformFees,
  deliveryCharges,
}: PriceDetailsSectionProps) => {
  const totalAmount = totalPrice - discount - couponDiscount + platformFees + deliveryCharges;

  return (
    <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
      <Text className="text-[13px] font-bold text-slate-900 mb-4">Price details</Text>
      
      <View className="gap-3 mb-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-[13px] text-slate-500">Price({itemsCount} items)</Text>
          <Text className="text-[13px] text-slate-900 font-bold">₹{totalPrice}</Text>
        </View>
        
        <View className="flex-row justify-between items-center">
          <Text className="text-[13px] text-slate-500">Discount</Text>
          <Text className="text-[13px] text-green-600 font-bold">-₹{discount}</Text>
        </View>
        
        <View className="flex-row justify-between items-center">
          <Text className="text-[13px] text-slate-500">Coupon Discount</Text>
          <Text className="text-[13px] text-green-600 font-bold">-₹{couponDiscount}</Text>
        </View>
        
        <View className="flex-row justify-between items-center">
          <Text className="text-[13px] text-slate-500">Platform Fees</Text>
          <Text className="text-[13px] text-slate-900 font-bold">₹{platformFees}</Text>
        </View>
        
        <View className="flex-row justify-between items-center">
          <Text className="text-[13px] text-slate-500">Delivery Charges</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-[13px] text-slate-400 line-through">₹10</Text>
            <Text className="text-[13px] text-green-600 font-bold">Free Delivery</Text>
          </View>
        </View>
      </View>

      <View className="pt-4 border-t border-slate-100 border-dashed flex-row justify-between items-center">
        <Text className="text-[15px] font-bold text-slate-900">Total Amount</Text>
        <Text className="text-[15px] font-bold text-slate-900">₹{totalAmount}</Text>
      </View>
    </View>
  );
};

export default PriceDetailsSection;
