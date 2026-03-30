import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PriceDetails from '../../cart/components/PriceDetails';

export function OrderSuccessScreen() {
  const navigation = useNavigation<any>();

  const mockBreakdown = {
    itemCount: 2,
    totalMRP: 1200,
    discount: 220,
    couponDiscount: 20,
    platformFees: 10,
    deliveryCharge: 0,
    freeDelivery: true,
    totalAmount: 900,
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        
        {/* Success Header */}
        <View className="items-center mt-10 mb-8 px-6">
          <View className="bg-green-500 h-16 w-16 rounded-full items-center justify-center mb-4">
            <Ionicons name="checkmark" size={40} color="white" />
          </View>
          <Text className="text-xl font-bold text-black mb-2 text-center">Your order is Successful</Text>
          <Text className="text-gray-500 text-sm text-center">
            You will receive an email shortly for Order Details
          </Text>
        </View>

        {/* Order Info Card */}
        <View className="mx-4 mb-6 p-4 rounded-2xl border border-gray-100 bg-gray-50">
          <View className="flex-row justify-between mb-3">
            <Text className="text-xs text-gray-500">Order ID #4321943</Text>
            <Pressable>
              <Text className="text-xs text-primary font-bold">Track</Text>
            </Pressable>
          </View>
          
          <View className="flex-row items-center">
            <View className="h-16 w-12 bg-gray-200 rounded-lg overflow-hidden mr-3">
              <Image 
                source={require('../../../assets/CardImages/card-image-1.jpg')} 
                className="h-full w-full"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-black" numberOfLines={1}>Blue Summer Dress floral</Text>
              <View className="flex-row items-center mt-1">
                <View className="flex-row items-center mr-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                   <Ionicons key={s} name="star" size={12} color="#FFB800" />
                  ))}
                  <Text className="text-[10px] text-gray-400 ml-1">4.8 (113)</Text>
                </View>
              </View>
              <Text className="text-xs text-gray-500 mt-1">Free Delivery by 12th May</Text>
            </View>
          </View>
        </View>

        {/* Price Details Reuse */}
        <PriceDetails breakdown={mockBreakdown} />

      </ScrollView>

      {/* Bottom Button */}
      <View className="px-4 py-3 bg-white">
        <Pressable 
          className="bg-primary rounded-xl py-4 items-center text-lg"
          onPress={() => navigation.navigate('MainTabs', {screen: 'Home'})}
        >
          <Text className="text-white font-bold text-lg tracking-widest">
            CONTINUE SHOPPING
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
