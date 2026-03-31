import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface CouponCardProps {
  icon: React.ReactNode;
  accentColor: string;
  lightColor: string;
  title: string;
  description: string;
  onPress?: () => void;
}

const CouponCard = ({ 
  icon, 
  accentColor, 
  lightColor, 
  title, 
  description, 
  onPress 
}: CouponCardProps) => {
  return (
    <Pressable 
      onPress={onPress}
      className="flex-row mx-4 mb-4 rounded-2xl overflow-hidden shadow-sm h-28"
    >
      {/* Left Section (Accent) */}
      <View 
        style={{ backgroundColor: accentColor }}
        className="w-[30%] items-center justify-center relative"
      >
        {icon}
        
        {/* Left Side Ticket Cut */}
        <View 
          className="absolute -left-3 w-6 h-6 rounded-full bg-white self-center" 
          style={{ top: '50%', marginTop: -12 }}
        />
      </View>

      {/* Right Section (Details) */}
      <View 
        style={{ backgroundColor: lightColor }}
        className="flex-1 p-4 justify-center relative"
      >
        <Text 
          style={{ color: accentColor }}
          className="text-[14px] font-bold mb-1 leading-5"
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text className="text-[11px] text-gray-500 mb-2 leading-4" numberOfLines={2}>
          {description}
        </Text>
        <Pressable>
          <Text 
             style={{ color: accentColor }}
             className="text-[11px] font-medium opacity-80"
          >
            view T&C
          </Text>
        </Pressable>

        {/* Right Side Ticket Cut */}
        <View 
          className="absolute -right-3 w-6 h-6 rounded-full bg-white self-center" 
          style={{ top: '50%', marginTop: -12 }}
        />
      </View>
    </Pressable>
  );
};

export default CouponCard;
