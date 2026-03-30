import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../theme/colors';

interface ReturnExchangeSectionProps {
  orderId: string;
  availableTill: string;
}

const ReturnExchangeSection = ({ orderId, availableTill }: ReturnExchangeSectionProps) => {
  const navigation = useNavigation<any>();

  return (
    <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4 flex-row items-center justify-between">
      <View className="flex-row items-center flex-1 mr-4">
        <View className="h-10 w-10 bg-orange-50 rounded-lg items-center justify-center mr-3">
          <Feather name="package" size={20} color="#F97316" />
        </View>
        <Text className="text-[12px] text-slate-700 font-medium flex-1">
          Return/ Exchange available till <Text className="font-bold">{availableTill}</Text>
        </Text>
      </View>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('ReturnExchange', { orderId })}
        className="px-4 py-2 border border-primary rounded-lg"
      >
        <Text className="text-[11px] text-primary font-bold">Return/Exchange</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReturnExchangeSection;
