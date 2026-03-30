import React from 'react';
import { View, Text, Pressable } from 'react-native';

const BANKS = [
  { id: 'sbi', name: 'SBI Bank' },
  { id: 'hdfc', name: 'HDFC Bank' },
  { id: 'icici', name: 'ICICI Bank' },
  { id: 'axis', name: 'Axis Bank' },
];

interface NetBankingPaymentProps {
  onPay: () => void;
}

const NetBankingPayment = ({ onPay }: NetBankingPaymentProps) => {
  const [selected, setSelected] = React.useState('sbi');

  return (
    <View className="mt-2">
      {BANKS.map((bank) => (
        <Pressable 
          key={bank.id}
          onPress={() => setSelected(bank.id)}
          className="flex-row items-center py-3"
        >
          <View className={`h-4 w-4 rounded-full border items-center justify-center ${selected === bank.id ? 'border-primary' : 'border-gray-400'}`}>
            {selected === bank.id && <View className="h-2 w-2 rounded-full bg-primary" />}
          </View>
          <Text className="ml-3 text-sm text-gray-700">{bank.name}</Text>
        </Pressable>
      ))}
      
      <Pressable className="py-2">
        <Text className="text-primary text-xs font-semibold">View all banks</Text>
      </Pressable>

      <Pressable 
        onPress={onPay}
        className="bg-primary rounded-lg py-3.5 items-center mt-4"
      >
        <Text className="text-white font-bold text-sm tracking-widest">PAY NOW</Text>
      </Pressable>
    </View>
  );
};

export default NetBankingPayment;
