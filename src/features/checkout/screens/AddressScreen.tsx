import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import CheckoutStepper from '../../cart/components/CheckoutStepper';
import DeliveryAddress from '../../cart/components/DeliveryAddress';

export function AddressScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="bg-white flex-1">
      <StatusBar style="dark" />

      {/* ── Scrollable body ── */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>

        {/* ── Step progress ── */}
        <CheckoutStepper currentStep={2} />

        {/* ── Delivery Address Card ── */}
        <DeliveryAddress 
          onChangePress={() => {
            // For now, this could open the AddressModal if needed
            navigation.navigate('AddressModal');
          }}
        />

      </ScrollView>

      {/* ── Sticky bottom button ── */}
      <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-100">
        <View className="px-4 py-3">
          <Pressable 
            className="bg-primary rounded-xl py-4 items-center"
            onPress={() => {
              navigation.navigate('Payment');
            }}

          >
            <Text className="text-white font-bold text-sm tracking-widest">
              PROCEED TO PAY
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

    </View>
  );
}
