import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../theme/colors';

const ProfileHeader = () => {
  const navigation = useNavigation<any>();

  return (
    <View className="mx-4 mt-6 mb-4 p-5 rounded-2xl bg-white border border-gray-50 shadow-sm flex-row items-center">
      {/* Avatar */}
      <View className="h-16 w-16 rounded-full bg-[#1AA100] items-center justify-center">
        <Text className="text-white text-xl font-bold">SG</Text>
      </View>
      
      {/* Info */}
      <View className="ml-4 flex-1">
        <Text className="text-lg font-bold text-gray-900">Shreya Gupta</Text>
        <Text className="text-sm text-gray-400 mt-0.5">guptashreya2006@gmail.com</Text>
      </View>
      
      {/* Edit Button */}
      <Pressable 
        onPress={() => navigation.navigate('EditProfile')}
        className="border border-[#E1DAED] px-3 py-1.5 rounded-lg"
      >
        <Text className="text-primary text-xs font-semibold">Edit profile</Text>
      </Pressable>
    </View>
  );
};


export default ProfileHeader;
