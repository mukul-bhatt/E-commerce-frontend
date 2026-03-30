import React from 'react';
import { View, Text } from 'react-native';

interface ShippingDetailsSectionProps {
  name: string;
  address: string;
  mobile: string;
}

const ShippingDetailsSection = ({ name, address, mobile }: ShippingDetailsSectionProps) => {
  return (
    <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
      <Text className="text-[13px] font-bold text-slate-900 mb-4">Shipping details</Text>
      
      <View className="mb-4 pt-4 border-t border-slate-100 border-dashed">
        <Text className="text-[14px] font-bold text-slate-800 mb-2">{name}</Text>
        <Text className="text-[12px] text-slate-500 leading-5 mb-4">
          {address}
        </Text>
        <Text className="text-[12px] text-slate-800 font-medium">
          Mobile No. : {mobile}
        </Text>
      </View>
    </View>
  );
};

export default ShippingDetailsSection;
