import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

const UPI_METHODS = [
  { id: 'gpay', name: 'Google Pay', icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' },
  { id: 'phonepe', name: 'PhonePe', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-phonepe-logo-icon-download-in-svg-png-gif-file-formats--wallet-payment-apps-pack-logos-icons-2736440.png' },
  { id: 'paytm', name: 'Paytm', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-paytm-logo-icon-download-in-svg-png-gif-file-formats--brand-digital-payment-pack-logos-icons-226456.png' },
  { id: 'other', name: 'Other UPI ID', icon: 'https://cdn-icons-png.flaticon.com/512/3596/3596092.png' },
];

interface UPIPaymentProps {
  onPay: () => void;
}

const UPIPayment = ({ onPay }: UPIPaymentProps) => {
  const [selected, setSelected] = React.useState('gpay');

  return (
    <View className="mt-2">
      {UPI_METHODS.map((method) => (
        <Pressable 
          key={method.id}
          onPress={() => setSelected(method.id)}
          className="flex-row items-center py-3"
        >
          <View className={`h-4 w-4 rounded-full border items-center justify-center ${selected === method.id ? 'border-primary' : 'border-gray-400'}`}>
            {selected === method.id && <View className="h-2 w-2 rounded-full bg-primary" />}
          </View>
          <Text className="ml-3 text-sm text-gray-700 flex-1">{method.name}</Text>
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

export default UPIPayment;
