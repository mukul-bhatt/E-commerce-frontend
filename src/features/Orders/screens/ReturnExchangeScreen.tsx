import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { ORDER_DETAILS_MOCK, ORDER_RETURN_REASONS, AVAILABLE_SIZES } from '../constants/orderDetailsMockData';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../../theme/colors';

const ReturnExchangeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { orderId } = route.params as { orderId: string };
  const order = ORDER_DETAILS_MOCK[orderId];

  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [refundToBank, setRefundToBank] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!order) return null;

  const showOptions = selectedReason !== null;

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar style="dark" />
      
      {/* Header handled by Stack Navigator */}

      <ScrollView 
        className="flex-1 px-4 pt-4 mb-10"
        showsVerticalScrollIndicator={false}
      >
        {/* Order Summary Card */}
        <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
          <View className="flex-row gap-4">
            <Image
              source={{ uri: order.productImage }}
              className="h-16 w-16 rounded-lg bg-slate-50"
            />
            <View className="flex-1">
              <Text className="text-[14px] font-medium text-slate-900 mb-1 leading-5">
                {order.productName}
              </Text>
              <Text className="text-[12px] text-slate-600 mb-1">
                Sold By: <Text className="font-bold">{order.sellerName}</Text>
              </Text>
              <Text className="text-[11px] text-slate-400 mb-1">{order.variant}</Text>
              <Text className="text-[13px] font-bold text-slate-900">₹590</Text>
            </View>
          </View>
        </View>

        {/* Return Availability Banner */}
        <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4 flex-row items-center">
          <View className="h-10 w-10 bg-orange-50 rounded-lg items-center justify-center mr-3">
            <Feather name="package" size={20} color="#F97316" />
          </View>
          <Text className="text-[12px] text-slate-700 font-medium flex-1">
            Return/ Exchange available till <Text className="font-bold">{order.returnAvailableTill || '28 May 2025'}</Text>
          </Text>
        </View>

        {/* Reason Selection */}
        <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
          <Text className="text-[14px] font-bold text-slate-900 mb-4">Reason for Return/Exchange</Text>
          
          <View className="gap-4">
            {ORDER_RETURN_REASONS.map((reason) => (
              <TouchableOpacity
                key={reason}
                onPress={() => setSelectedReason(reason)}
                className="flex-row items-center"
              >
                <Ionicons
                  name={selectedReason === reason ? 'radio-button-on' : 'radio-button-off'}
                  size={20}
                  color={selectedReason === reason ? colors.primary : '#94a3b8'}
                />
                <Text className={`ml-3 text-[12px] ${selectedReason === reason ? 'text-primary font-medium' : 'text-slate-600'}`}>
                  {reason}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Conditional Sections */}
        {showOptions && (
          <>
            {/* Exchange Section */}
            <View className="mb-4">
              <Text className="text-[13px] font-bold text-slate-900 mb-3 px-1">Exchange</Text>
              <View className="bg-white p-4 rounded-xl border border-slate-100">
                <Text className="text-[12px] font-bold text-slate-800 mb-4">Available Size</Text>
                <View className="flex-row gap-4">
                  {AVAILABLE_SIZES.map((size) => (
                    <TouchableOpacity
                      key={size}
                      onPress={() => setSelectedSize(size)}
                      className={`h-12 w-16 items-center justify-center rounded-lg border ${
                        selectedSize === size ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <Text className={`text-[14px] font-bold ${selectedSize === size ? 'text-primary' : 'text-slate-800'}`}>
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* Refund Section */}
            <View className="mb-4">
              <Text className="text-[13px] font-bold text-slate-900 mb-3 px-1">Refund</Text>
              <TouchableOpacity
                onPress={() => setRefundToBank(!refundToBank)}
                className="bg-white p-4 rounded-xl border border-slate-100 flex-row items-center"
              >
                <View className={`h-6 w-6 rounded-md border items-center justify-center ${refundToBank ? 'bg-slate-300 border-slate-300' : 'border-slate-200'}`}>
                  {refundToBank && <Ionicons name="checkmark" size={16} color="white" />}
                </View>
                <Text className="ml-3 text-[12px] text-slate-700 font-medium">
                  Send refund amount in my bank account
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* Confirmation Checkbox */}
        <TouchableOpacity
          onPress={() => setIsConfirmed(!isConfirmed)}
          className="bg-white p-4 rounded-xl border border-slate-100 mb-20 flex-row items-center"
        >
          <View className={`h-6 w-6 rounded-md border items-center justify-center ${isConfirmed ? 'bg-slate-300 border-slate-300' : 'border-slate-200'}`}>
            {isConfirmed && <Ionicons name="checkmark" size={16} color="white" />}
          </View>
          <Text className="ml-3 text-[12px] text-slate-700 font-medium">
            I confirm product is unused with original tags and packaging
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Footer Proceed Button */}
      {showOptions && (
        <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-slate-100">
          <TouchableOpacity
            disabled={!isConfirmed || (!selectedSize && !refundToBank)}
            className={`py-4 rounded-xl items-center ${
              isConfirmed && (selectedSize || refundToBank) ? 'bg-primary' : 'bg-slate-200'
            }`}
          >
            <Text className="text-white font-bold text-[16px]">PROCEED</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ReturnExchangeScreen;
