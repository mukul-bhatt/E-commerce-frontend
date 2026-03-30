import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import DeletePaymentModal from '../components/DeletePaymentModal';

const SAVED_UPI = [
  { id: '1', upiId: 'guptashreya@okhdfcbank' },
  { id: '2', upiId: 'guptashreya@okhdfcbank' },
  { id: '3', upiId: 'guptashreya@okhdfcbank' },
];

const SAVED_CARDS = [
  { id: '1', last4: '9090' },
  { id: '2', last4: '9090' },
];

export function SavedPaymentsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteType, setDeleteType] = useState('');

  const handleDeletePress = (type: string) => {
    setDeleteType(type);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    setModalVisible(false);
    // Add deletion logic here
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Saved UPI Section */}
        <View className="bg-gray-50 px-4 py-4">
          <Text className="text-[16px] font-bold text-gray-900">Saved UPI</Text>
        </View>

        {SAVED_UPI.map((item) => (
          <View key={item.id} className="flex-row items-center px-4 py-4 border-b border-gray-100 bg-white">
            <View className="w-8 items-center">
              <Image 
                 source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/1024px-Google_Pay_Logo_%282020%29.svg.png' }} 
                 className="w-8 h-4" 
                 resizeMode="contain" 
              />
            </View>
            <Text className="flex-1 ml-4 text-[14px] text-gray-700">{item.upiId}</Text>
            <Pressable onPress={() => handleDeletePress('UPI ID')}>
              <Text className="text-primary font-bold text-[12px] tracking-wider uppercase">DELETE</Text>
            </Pressable>
          </View>
        ))}

        {/* Saved Cards Section */}
        <View className="bg-gray-50 px-4 py-4 mt-4">
          <Text className="text-[16px] font-bold text-gray-900">Saved Cards</Text>
        </View>

        {SAVED_CARDS.map((item) => (
          <View key={item.id} className="flex-row items-center px-4 py-4 border-b border-gray-100 bg-white">
            <View className="w-8 items-center">
              <MaterialCommunityIcons name="credit-card-outline" size={24} color="#4B5563" />
            </View>
            <Text className="flex-1 ml-4 text-[14px] text-gray-700">****************{item.last4}</Text>
            <Pressable onPress={() => handleDeletePress('Card')}>
              <Text className="text-primary font-bold text-[12px] tracking-wider uppercase">DELETE</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <DeletePaymentModal 
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={confirmDelete}
        type={deleteType}
      />
    </View>
  );
}

