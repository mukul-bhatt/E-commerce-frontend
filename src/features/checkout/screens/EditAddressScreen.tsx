import React from 'react';
import { ScrollView, View, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import AddressInputField from '../components/AddressInputField';

export function EditAddressScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { address } = (route.params as any) || {};

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 100 }}
      >
        <AddressInputField 
          label="Name" 
          placeholder="Shreya Singh"
          defaultValue={address?.name}
        />
        
        <AddressInputField 
          label="Phone Number" 
          placeholder="+91 8767854300"
          keyboardType="phone-pad"
          defaultValue={address?.phone}
        />
        
        <AddressInputField 
          label="Flat no/ House No" 
          placeholder="+91 8767854300" 
        />
        
        <AddressInputField 
          label="Locality/Area" 
          placeholder="+91 8767854300" 
        />
        
        <AddressInputField 
          label="State" 
          placeholder="New Delhi" 
        />
        
        <AddressInputField 
          label="Country" 
          placeholder="India" 
        />
      </ScrollView>

      {/* Bottom Button */}
      <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-50 absolute bottom-0 w-full">
        <View className="px-4 py-4">
          <Pressable 
            className="bg-primary rounded-xl py-4 items-center shadow-lg"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold text-sm tracking-widest uppercase">
              SAVE ADDRESS
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

    </View>
  );
}
