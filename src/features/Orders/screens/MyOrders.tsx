import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ORDERS_DATA, OrderStatus } from '../constants/orderMockData';
import { OrderCard } from '../components/OrderCard';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../../theme/colors';

const FILTER_OPTIONS: (OrderStatus | 'All')[] = [
  'All',
  'Out for delivery',
  'Delivered',
  'Cancelled',
  'Return',
];

const MyOrders = () => {
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<(OrderStatus | 'All')>('All');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => setShowFilter((prev) => !prev)}
          style={{ marginRight: 20 }}
        >
          <Feather name="menu" size={24} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, showFilter]);

  const filteredOrders = ORDERS_DATA.filter((order) => {
    if (selectedFilter === 'All') return true;
    return order.status === selectedFilter;
  });

  return (
    <View className="flex-1 bg-white pt-4">
      <StatusBar style="dark" />

      {/* Filter Row */}
      {showFilter && (
        <View className="mb-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = selectedFilter === option;
              return (
                <TouchableOpacity
                  key={option}
                  onPress={() => setSelectedFilter(option)}
                  className={`px-6 py-2 rounded-full border ${
                    isSelected
                      ? 'bg-primary border-primary'
                      : 'bg-slate-50 border-slate-100'
                  }`}
                >
                  <Text
                    className={`text-[12px] font-medium ${
                      isSelected ? 'text-white' : 'text-slate-500'
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}

      {/* Order List */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-4"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <OrderCard
            item={item}
            onPress={(order) => console.log('Order Pressed:', order.orderId)}
          />
        )}
        ListFooterComponent={<View className="h-10" />}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <Text className="text-slate-400 italic">No orders found for this filter.</Text>
          </View>
        }
      />
    </View>
  );
};

export default MyOrders;