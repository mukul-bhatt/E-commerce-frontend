import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const PRIVACY_CONTENT = [
  {
    id: '1',
    title: 'Information We Collect',
    body: 'We collect your name, email, phone number, address, and payment details when you create an account or place an order.'
  },
  {
    id: '2',
    title: 'How We Use Your Data',
    body: 'Your information helps us process orders, improve our services, and send order updates or promotions (if you opt in).'
  },
  {
    id: '3',
    title: 'Data Security',
    body: 'We use secure servers and encryption to protect your personal and payment information.'
  },
  {
    id: '4',
    title: 'Sharing Data',
    body: 'We do not sell your data. We only share it with trusted partners for order delivery and payment processing.'
  },
  {
    id: '5',
    title: 'Your Choices',
    body: 'You can update or delete your account anytime. You may also opt out of marketing emails.'
  },
  {
    id: '6',
    title: 'Cookies',
    body: 'We use cookies to improve your browsing experience. You can disable them in your browser settings.'
  },
  {
    id: '7',
    title: 'Policy Updates',
    body: 'We may update this policy. Please check this page for the latest version.'
  }
];

export function PrivacyPolicyScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 }}
      >
        <Text className="text-[14px] text-gray-900 leading-5 mb-6">
          We value your privacy. This policy explains how we collect, use, and protect your information.
        </Text>

        {PRIVACY_CONTENT.map((section) => (
          <View key={section.id} className="mb-6">
            <Text className="text-[15px] font-bold text-gray-900 mb-1">
              {section.id}. {section.title}
            </Text>
            <Text className="text-[14px] text-gray-600 leading-6">
              {section.body}
            </Text>
          </View>
        ))}

        <Text className="text-[14px] text-gray-900 leading-5 mb-8">
          If you have questions, contact us at <Text className="text-secondary">[support@example.com]</Text>.
        </Text>
      </ScrollView>
    </View>
  );
}
