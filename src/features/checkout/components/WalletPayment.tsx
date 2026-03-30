import React from 'react';
import { View, Text, Pressable } from 'react-native';

const WALLETS = [
  { id: 'airtel', name: 'Airtel Money' },
  { id: 'freecharge', name: 'Freecharge' },
  { id: 'mobikwik', name: 'MobiKwik' },
  { id: 'ola', name: 'Ola Money' },
];

interface WalletPaymentProps {
  onPay: () => void;
}

const WalletPayment = ({ onPay }: WalletPaymentProps) => {
  const [selected, setSelected] = React.useState('airtel');

  return (
    <View className="mt-2">
      {WALLETS.map((wallet) => (
        <Pressable 
          key={wallet.id}
          onPress={() => setSelected(wallet.id)}
          className="flex-row items-center py-3"
        >
          <View className={`h-4 w-4 rounded-full border items-center justify-center ${selected === wallet.id ? 'border-primary' : 'border-gray-400'}`}>
            {selected === wallet.id && <View className="h-2 w-2 rounded-full bg-primary" />}
          </View>
          <Text className="ml-3 text-sm text-gray-700">{wallet.name}</Text>
        </Pressable>
      ))}
      
      <Pressable 
        onPress={onPay}
        className="bg-primary rounded-lg py-3.5 items-center mt-4"
      >
        <Text className="text-white font-bold text-sm tracking-widest">PAY NOW</Text>
      </Pressable>
    </View>
  );
};

export default WalletPayment;
