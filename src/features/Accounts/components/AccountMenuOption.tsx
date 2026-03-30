import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface AccountMenuOptionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const AccountMenuOption = ({ icon, title, subtitle, onPress }: AccountMenuOptionProps) => {
  return (
    <Pressable 
      onPress={onPress}
      className="mx-4 mb-3 p-4 rounded-xl bg-white border border-gray-50 flex-row items-center"
    >
      <View className="h-10 w-10 items-center justify-center">
        {icon}
      </View>
      
      <View className="ml-3 flex-1">
        <Text className="text-sm font-bold text-gray-900">{title}</Text>
        <Text className="text-[11px] text-gray-400 mt-0.5" numberOfLines={1}>{subtitle}</Text>
      </View>
      
      <Feather name="chevron-right" size={20} color="#9BA5B7" />
    </Pressable>
  );
};

export default AccountMenuOption;
