import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

import CheckoutStepper from '../../cart/components/CheckoutStepper';
import PriceDetails from '../../cart/components/PriceDetails';
import PaymentAccordion from '../components/PaymentAccordion';
import UPIPayment from '../components/UPIPayment';
import CardPayment from '../components/CardPayment';
import WalletPayment from '../components/WalletPayment';
import NetBankingPayment from '../components/NetBankingPayment';

export function PaymentScreen() {
  const navigation = useNavigation<any>();
  const [expandedSection, setExpandedSection] = useState<string | null>('upi');
  const [isCODSelected, setIsCODSelected] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
    if (section !== 'cod') setIsCODSelected(false);
  };

  const handlePaymentSuccess = () => {
    navigation.navigate('OrderSuccess');
  };

  const renderPriceBreakdown = () => {
    // Mock breakdown data matching the UI
    return {
      itemCount: 2,
      totalMRP: 1200,
      discount: 220,
      couponDiscount: 20,
      platformFees: 10,
      deliveryCharge: 10,
      freeDelivery: true,
      totalAmount: 900,
    };
  };

  return (
    <View className="bg-white flex-1">
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Step progress */}
        <CheckoutStepper currentStep={3} />

        {/* Payment Options */}
        <View className="mt-2">
          <PaymentAccordion 
            title="UPI (pay via any App)"
            icon={<MaterialCommunityIcons name="integrated-circuit-chip" size={20} color="#666" />}
            isExpanded={expandedSection === 'upi'}
            onToggle={() => toggleSection('upi')}
          >
            <UPIPayment onPay={handlePaymentSuccess} />
          </PaymentAccordion>

          <PaymentAccordion 
            title="Credit/Debit Card"
            icon={<MaterialCommunityIcons name="credit-card-outline" size={20} color="#666" />}
            isExpanded={expandedSection === 'card'}
            onToggle={() => toggleSection('card')}
            badge="2 offers"
          >
            <CardPayment onPay={handlePaymentSuccess} />
          </PaymentAccordion>

          <PaymentAccordion 
            title="Wallet"
            icon={<Ionicons name="wallet-outline" size={20} color="#666" />}
            isExpanded={expandedSection === 'wallet'}
            onToggle={() => toggleSection('wallet')}
          >
            <WalletPayment onPay={handlePaymentSuccess} />
          </PaymentAccordion>

          <PaymentAccordion 
            title="Net Banking"
            icon={<MaterialIcons name="account-balance" size={20} color="#666" />}
            isExpanded={expandedSection === 'netbanking'}
            onToggle={() => toggleSection('netbanking')}
            badge="1 offer"
          >
            <NetBankingPayment onPay={handlePaymentSuccess} />
          </PaymentAccordion>

          {/* Pay on Delivery Section */}
          <View className="bg-gray-50 px-4 py-3 mt-4">
            <Text className="text-sm font-medium text-gray-700">Pay on Delivery</Text>
          </View>
          
          <Pressable 
            onPress={() => {
              setIsCODSelected(!isCODSelected);
              setExpandedSection(null);
            }}
            className="flex-row items-center px-4 py-4 border-b border-gray-100"
          >
            <View className={`h-5 w-5 rounded-full border items-center justify-center ${isCODSelected ? 'border-primary' : 'border-gray-400'}`}>
              {isCODSelected && <View className="h-2.5 w-2.5 rounded-full bg-primary" />}
            </View>
            <Text className="ml-3 text-[15px] font-medium text-black">Cash on Delivery (Cash/UPI)</Text>
          </Pressable>
        </View>

        {/* Price Details */}
        <View className="mt-4">
          <PriceDetails breakdown={renderPriceBreakdown()} />
        </View>
      </ScrollView>

      {/* Sticky Button for COD */}
      {isCODSelected && (
        <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-100 absolute bottom-0 w-full">
          <View className="px-4 py-3">
            <Pressable 
              className="bg-primary rounded-xl py-4 items-center"
              onPress={handlePaymentSuccess}
            >
              <Text className="text-white font-bold text-lg tracking-widest uppercase">
                Confirm Order
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      )}

    </View>
  );
}
