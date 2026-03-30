import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const TERMS_CONTENT = [
  {
    id: '1',
    title: 'Account Responsibility',
    body: 'You are responsible for keeping your login information safe. Do not share your account with others.'
  },
  {
    id: '2',
    title: 'Ordering & Payments',
    body: 'All orders are subject to availability. Prices may change without notice. Payments must be made using secure and approved methods.'
  },
  {
    id: '3',
    title: 'Returns & Refunds',
    body: 'We accept returns as per our return policy. Refunds are processed once the returned item is received and inspected.'
  },
  {
    id: '4',
    title: 'Proper Use',
    body: 'You agree not to use the app for illegal activities, spam, or any harmful actions.'
  },
  {
    id: '5',
    title: 'Content & Copyright',
    body: 'All content (images, text, logos) belongs to us or our partners. Do not copy or use without permission.'
  },
  {
    id: '6',
    title: 'Privacy',
    body: 'We respect your privacy. Your data is protected and used according to our Privacy Policy.'
  },
  {
    id: '7',
    title: 'Changes to Terms',
    body: 'We may update these terms anytime. Continued use of the app means you accept any changes.'
  }
];

export function TermsOfUseScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 100 }}
      >
        <Text className="text-[14px] text-gray-900 leading-5 mb-6">
          Welcome to our e-commerce app. By using our services, you agree to the following:
        </Text>

        {TERMS_CONTENT.map((section) => (
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
          For any questions, contact our support team at <Text className="text-secondary">[your email or support info]</Text>.
        </Text>
      </ScrollView>

      {/* Bottom Button */}
      <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-50 absolute bottom-0 w-full">
        <View className="px-5 py-4">
          <Pressable 
            className="bg-primary rounded-xl py-4 items-center shadow-lg"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold text-sm tracking-widest uppercase">
              I AGREE
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
