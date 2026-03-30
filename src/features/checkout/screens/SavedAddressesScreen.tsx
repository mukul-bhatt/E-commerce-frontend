import React from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SavedAddressCard, { Address } from '../components/SavedAddressCard';

const MOCK_ADDRESSES: Address[] = [
  {
    id: '1',
    tag: 'HOME',
    name: 'Shreya Singh',
    details: '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
    phone: '+91 8978786543'
  },
  {
    id: '2',
    tag: 'HOME',
    name: 'Shreya Singh',
    details: '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
    phone: '+91 8978786543'
  },
  {
    id: '3',
    tag: 'WORK',
    name: 'Shreya Singh',
    details: '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
    phone: '+91 8978786543'
  },
  {
    id: '4',
    tag: 'OTHERS',
    name: 'Shreya Singh',
    details: '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
    phone: '+91 8978786543'
  }
];

export function SavedAddressesScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 40 }}
      >
        {MOCK_ADDRESSES.map((address) => (
          <SavedAddressCard 
            key={address.id} 
            address={address} 
          />
        ))}
      </ScrollView>
    </View>
  );
}
