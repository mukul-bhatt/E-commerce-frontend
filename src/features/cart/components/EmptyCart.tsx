import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../../theme/typography';
import { StatusBar } from 'expo-status-bar';

const EmptyCart = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      {/* <View className="flex-row items-center justify-between px-4 py-3">
        <Pressable 
          onPress={() => navigation.goBack()} 
          className="p-2"
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text 
          className="text-lg text-black text-center flex-1"
          style={{ fontFamily: fonts.rubikBold }}
        >
          Shopping Cart
        </Text>
        <View className="w-10" />
      </View> */}
      <StatusBar style="dark" />

      {/* Main Content */}
      <View className="flex-1 items-center justify-center pb-10">
        <Image
          source={require('../../../../assets/empty_cart_gradient.png')}
          className="w-64 h-64 mb-6"
          resizeMode="contain"
        />

        <Text
          className="text-lg text-black mb-8 text-center px-4"
          style={{ fontFamily: fonts.rubikBold }}
        >
          Your cart looks lonely :(
        </Text>

        <Pressable
          className="bg-primary py-4 px-16 rounded-xl active:opacity-80 items-center justify-center shadow-md shadow-primary/30"
          onPress={() => navigation.navigate('Home' as never)}
        >
          <Text
            className="text-white text-base mx-4"
            style={{ fontFamily: fonts.rubikBold }}
          >
            Start Shopping
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyCart;
