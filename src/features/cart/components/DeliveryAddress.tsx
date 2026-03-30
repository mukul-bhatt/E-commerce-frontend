import { Pressable, Text, View } from 'react-native';

interface DeliveryAddressProps {
  name?: string;
  address?: string;
  phone?: string;
  onChangePress?: () => void;
}

const DeliveryAddress = ({
  name = 'Shreya Singh',
  address = '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
  phone = '+91 8978786543',
  onChangePress,
}: DeliveryAddressProps) => {
  return (
    <View className="mx-4 my-3 px-4 py-3 rounded-xl border border-[#E8E8E8] bg-white">
      {/* Top row: Delivering to + CHANGE */}
      <View className="flex-row items-center justify-between mb-1.5">
        <Text className="text-sm font-bold text-black">
          Delivering to {name}
        </Text>
        <Pressable onPress={onChangePress}>
          <Text className="text-xs font-semibold text-primary tracking-wide">
            CHANGE
          </Text>
        </Pressable>
      </View>

      {/* Address */}
      <Text className="text-sm text-[#4A4A4A] leading-5 mb-1">
        {address}
      </Text>

      {/* Phone */}
      <Text className="text-sm text-[#4A4A4A]">{phone}</Text>
    </View>
  );
};

export default DeliveryAddress;
