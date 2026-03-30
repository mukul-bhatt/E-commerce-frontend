import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';

interface PaymentAccordionProps {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  badge?: string;
  badgeColor?: string;
}

const PaymentAccordion = ({
  title,
  icon,
  isExpanded,
  onToggle,
  children,
  badge,
  badgeColor = 'text-green-600',
}: PaymentAccordionProps) => {
  return (
    <View className="border-b border-gray-100 bg-white">
      <Pressable 
        onPress={onToggle}
        className={`flex-row items-center justify-between px-4 py-4 ${isExpanded ? 'bg-gray-50' : 'bg-white'}`}
      >
        <View className="flex-row items-center flex-1">
          {icon}
          <Text className="ml-3 text-[15px] font-medium text-black">{title}</Text>
          {badge && (
            <Text className={`ml-2 text-xs font-semibold ${badgeColor}`}>{badge}</Text>
          )}
        </View>

        <Feather 
          name={isExpanded ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color="#666" 
        />
      </Pressable>
      
      {isExpanded && (
        <View className="px-4 pb-4 bg-gray-50">
          {children}
        </View>
      )}
    </View>
  );
};

export default PaymentAccordion;
