import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { ORDER_DETAILS_MOCK } from '../constants/orderDetailsMockData';
import OrderTrackingStatus from '../components/OrderTrackingStatus';
import OrderRatingSection from '../components/OrderRatingSection';
import ReturnExchangeSection from '../components/ReturnExchangeSection';
import ShippingDetailsSection from '../components/ShippingDetailsSection';
import PriceDetailsSection from '../components/PriceDetailsSection';
import { StatusBar } from 'expo-status-bar';

const OrderDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { orderId } = route.params as { orderId: string };
  const order = ORDER_DETAILS_MOCK[orderId];

  if (!order) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <Text className="text-slate-500">Order not found.</Text>
      </View>
    );
  }

  const isDelivered = order.status === 'Delivered';

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      <ScrollView 
        className="flex-1 px-4 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Rating Section (Post-delivery) */}
        {isDelivered && (
          <OrderRatingSection
            productName={order.productName}
            productImage={order.productImage}
          />
        )}

        {/* Return/Exchange Section (Post-delivery) */}
        {isDelivered && order.returnAvailableTill && (
          <ReturnExchangeSection 
            orderId={order.orderId}
            availableTill={order.returnAvailableTill} 
          />
        )}

        {/* Order Card Summary */}
        <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-[10px] font-bold text-slate-800">ORDER ID #{order.orderId}</Text>
          </View>
          
          <View className="pt-4 border-t border-slate-100 border-dashed flex-row gap-4">
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
              <Text className="text-[11px] text-slate-400">{order.variant}</Text>
            </View>
            <View className="justify-center">
              <TouchableOpacity className="h-8 w-8 rounded-full border border-primary items-center justify-center">
                <Ionicons name="chevron-forward" size={18} color="#7C3AED" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-4 pt-4 border-t border-slate-100 border-dashed flex-row items-center gap-2">
            <FontAwesome5 name="shipping-fast" size={14} color="#16A34A" />
            <Text className={`text-[11px] font-medium ${isDelivered ? 'text-green-600' : 'text-green-600'}`}>
              {isDelivered ? 'Delivered' : 'Delivery'} by {order.actionDate}
            </Text>
          </View>
        </View>

        {/* Tracking Section */}
        <OrderTrackingStatus steps={order.trackingSteps} />

        {/* Shipping Details */}
        <ShippingDetailsSection 
          name={order.shippingAddress.name}
          address={order.shippingAddress.address}
          mobile={order.shippingAddress.mobile}
        />

        {/* Price Details */}
        <PriceDetailsSection {...order.priceDetails} />

        <View className="h-10" />
      </ScrollView>
    </View>
  );
};

export default OrderDetailsScreen;
