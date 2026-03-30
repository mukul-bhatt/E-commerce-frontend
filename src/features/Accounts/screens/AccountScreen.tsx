import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import ProfileHeader from '../components/ProfileHeader';
import AccountMenuOption from '../components/AccountMenuOption';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function AccountScreen() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView 
      className="flex-1 bg-gray-50" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >

      <StatusBar style="dark" />

      <ProfileHeader />

      <AccountMenuOption 
        icon={<Feather name="heart" size={22} color="#4B5563" />}
        title="My Wishlist"
        subtitle="Check your saved items"
        onPress={() => navigation.navigate('Wishlist')}
      />

      <AccountMenuOption 
        onPress={() => navigation.navigate('SavedAddresses')}
        icon={<Feather name="map-pin" size={22} color="#4B5563" />}
        title="Saved Addresses"
        subtitle="Check your saved Addresses"
      />


      <AccountMenuOption 
        icon={<MaterialCommunityIcons name="credit-card-outline" size={24} color="#4B5563" />}
        title="Saved Payment methods"
        subtitle="Manage your payment methods"
      />

      <AccountMenuOption 
        icon={<Feather name="message-square" size={22} color="#4B5563" />}
        title="Ratings and reviews"
        subtitle="History of all your ratings and reviews"
      />

      <AccountMenuOption 
        icon={<MaterialCommunityIcons name="ticket-percent-outline" size={24} color="#4B5563" />}
        title="Coupons"
        subtitle="Your collected coupons will be shared here"
      />

      <AccountMenuOption 
        icon={<MaterialCommunityIcons name="gavel" size={24} color="#4B5563" />}
        title="Terms of use"
        subtitle="Terms and conditions"
      />

      <AccountMenuOption 
        icon={<MaterialCommunityIcons name="file-document-outline" size={24} color="#4B5563" />}
        title="Privacy Policy"
        subtitle="Privacy policy"
      />

      <AccountMenuOption 
        icon={<MaterialCommunityIcons name="face-agent" size={24} color="#4B5563" />}
        title="Contact Support"
        subtitle="Contact our support for claims"
      />

      <AccountMenuOption 
        icon={<Ionicons name="notifications-outline" size={24} color="#4B5563" />}
        title="Notification Settings"
        subtitle="Manage your Settings"
      />

      {/* Logout Button */}
      <Pressable className="mx-4 mt-6 py-4 rounded-xl border border-red-500 bg-white flex-row items-center justify-center">
        <Feather name="power" size={20} color="#EF4444" />
        <Text className="ml-3 text-red-500 font-bold tracking-widest">LOGOUT</Text>
      </Pressable>
    </ScrollView>
  );
}