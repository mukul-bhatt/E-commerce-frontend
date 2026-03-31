import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface NotificationOptionProps {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const NotificationOption = ({ label, value, onValueChange }: NotificationOptionProps) => (
  <View className="flex-row items-center justify-between px-4 py-5 border-b border-gray-50 bg-white">
    <Text className="text-[15px] text-gray-800 font-medium">{label}</Text>
    <Switch 
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#E5E7EB', true: '#5E4E91' }}
      thumbColor={Platform.OS === 'ios' ? undefined : (value ? '#FFFFFF' : '#F9FAFB')}
      ios_backgroundColor="#E5E7EB"
    />
  </View>
);

export function NotificationSettingsScreen() {
  const [settings, setSettings] = useState({
    email: true,
    sms: true,
    push: true,
    orderUpdates: true,
    promotions: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <NotificationOption 
          label="Email notifications"
          value={settings.email}
          onValueChange={() => toggleSetting('email')}
        />
        <NotificationOption 
          label="SMS Alert"
          value={settings.sms}
          onValueChange={() => toggleSetting('sms')}
        />
        <NotificationOption 
          label="Push Notifications"
          value={settings.push}
          onValueChange={() => toggleSetting('push')}
        />
        <NotificationOption 
          label="Order Updates"
          value={settings.orderUpdates}
          onValueChange={() => toggleSetting('orderUpdates')}
        />
        <NotificationOption 
          label="Promotion and Updates"
          value={settings.promotions}
          onValueChange={() => toggleSetting('promotions')}
        />
      </ScrollView>
    </View>
  );
}
