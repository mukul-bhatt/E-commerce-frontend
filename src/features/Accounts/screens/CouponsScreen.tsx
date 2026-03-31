import React from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import CouponCard from '../components/CouponCard';

const MOCK_COUPONS = [
  {
    id: '1',
    icon: <Feather name="shopping-bag" size={32} color="white" />,
    accentColor: '#5E4E91',
    lightColor: '#F5F3FF',
    title: '25 % off up to ₹120 on trending Fashion',
    description: 'Applied on selected brands only minimum order Value ₹1299'
  },
  {
    id: '2',
    icon: <Feather name="shopping-bag" size={32} color="white" />,
    accentColor: '#5E4E91',
    lightColor: '#F5F3FF',
    title: '25 % off up to ₹120 on trending Fashion',
    description: 'Applied on selected brands only minimum order Value ₹1299'
  },
  {
    id: '3',
    icon: <MaterialCommunityIcons name="washing-machine" size={38} color="white" />,
    accentColor: '#E66336',
    lightColor: '#FFF8F1',
    title: '10% off on Household appliances',
    description: 'Applied on selected brands only minimum order Value ₹10999'
  }
];

export function CouponsScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}
      >
        {MOCK_COUPONS.map((coupon) => (
          <CouponCard key={coupon.id} {...coupon} />
        ))}
      </ScrollView>
    </View>
  );
}
