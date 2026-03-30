import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { colors } from '../../../theme/colors';

interface CardPaymentProps {
  onPay: () => void;
}

const CardPayment = ({ onPay }: CardPaymentProps) => {
  return (
    <View className="mt-2">
      <View className="mb-4">
        <Text className="text-xs text-gray-500 mb-1">Card Number</Text>
        <TextInput 
          placeholder="XXXX XXXX XXXX XXXX"
          placeholderTextColor={colors.defaultGray}
          className="border-b border-gray-200 py-2 text-[15px] text-black"
          keyboardType="numeric"
        />
      </View>
      
      <View className="flex-row mb-4">
        <View className="flex-1 mr-4">
          <Text className="text-xs text-gray-500 mb-1">Expiry Date</Text>
          <TextInput 
            placeholder="MM / YY"
            placeholderTextColor={colors.defaultGray}
            className="border-b border-gray-200 py-2 text-[15px] text-black"
            keyboardType="numeric"
          />
        </View>
        <View className="flex-1">
          <Text className="text-xs text-gray-500 mb-1">CVV</Text>
          <TextInput 
            placeholder="XXX"
            placeholderTextColor={colors.defaultGray}
            className="border-b border-gray-200 py-2 text-[15px] text-black"
            keyboardType="numeric"
            secureTextEntry
          />
        </View>
      </View>
      
      <Pressable 
        onPress={onPay}
        className="bg-primary rounded-lg py-3.5 items-center mt-2"
      >
        <Text className="text-white font-bold text-sm tracking-widest">PAY NOW</Text>
      </Pressable>
    </View>
  );
};

export default CardPayment;
