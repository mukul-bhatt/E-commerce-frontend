import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const SUPPORT_OPTIONS = [
  {
    id: '1',
    icon: <Feather name="mail" size={24} color="#5E4E91" />,
    title: 'Email Support',
    description: 'Write us a mail at support@ecommerce.com'
  },
  {
    id: '2',
    icon: <Feather name="phone" size={24} color="#5E4E91" />,
    title: 'Contact Us',
    description: 'Contact us on our helpline Numbers Mon-Sat (9AM - 8PM)\n011 23456789 , +91 87654321'
  },
  {
    id: '3',
    icon: <FontAwesome5 name="whatsapp" size={24} color="#5E4E91" />,
    title: 'Connect on whatsapp',
    description: 'Contact with us on Whatsapp +91 987654321'
  },
  {
    id: '4',
    icon: <MaterialCommunityIcons name="chat-outline" size={26} color="#5E4E91" />,
    title: 'Live Chat',
    description: 'Share your concern with us over a chat'
  }
];

export function ContactSupportScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 }}
      >
        {SUPPORT_OPTIONS.map((option) => (
          <Pressable 
            key={option.id}
            className="bg-white p-6 rounded-2xl mb-4 border border-gray-100 shadow-sm"
          >
            <View className="flex-row items-start">
              <View className="mt-1">
                {option.icon}
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-[15px] font-bold text-[#5E4E91] mb-1">
                  {option.title}
                </Text>
                <Text className="text-[13px] text-gray-500 leading-5">
                  {option.description}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
