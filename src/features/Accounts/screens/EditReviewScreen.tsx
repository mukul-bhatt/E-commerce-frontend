import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export function EditReviewScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { review } = (route.params as any) || {};
  
  const [rating, setRating] = useState(review?.rating || 4);
  const [title, setTitle] = useState(review?.reviewTitle || '');
  const [body, setBody] = useState(review?.reviewBody || '');

  const renderStars = () => {
    return (
      <View className="flex-row items-center mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable key={star} onPress={() => setRating(star)} className="mr-2">
            <MaterialCommunityIcons 
              name={star <= rating ? "star" : "star-outline"} 
              size={36} 
              color={star <= rating ? "#2E7D32" : "#D1D5DB"} 
            />
          </Pressable>
        ))}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 100 }}
      >
        <Text className="text-[16px] font-bold text-gray-900 mb-4">
          {review?.productName || 'Women Red Dress XL'}
        </Text>

        {renderStars()}

        {/* Image Grid */}
        <View className="flex-row flex-wrap mb-6">
          {[1, 2, 3].map((item, index) => (
            <View key={index} className="w-[23%] aspect-square mr-[2.6%] mb-2 rounded-xl overflow-hidden bg-gray-100">
               <Image 
                source={review?.productImage || { uri: "https://assets0.mirraw.com/images/12864321/image_long_webp.webp?1727455095" }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          ))}
          <Pressable className="w-[23%] aspect-square border border-dashed border-gray-300 rounded-xl bg-gray-50 items-center justify-center">
            <Feather name="plus" size={24} color="#9CA3AF" />
            <Text className="text-[8px] text-gray-400 font-bold mt-1 uppercase text-center">Upload photos</Text>
          </Pressable>
        </View>

        {/* Inputs */}
        <View className="space-y-4">
          <View className="border border-gray-200 rounded-xl px-4 py-3 mb-4">
            <TextInput 
              className="text-[14px] text-gray-900 font-medium"
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View className="border border-gray-200 rounded-xl px-4 py-3 min-h-[120px]">
            <TextInput 
              className="text-[14px] text-gray-900 leading-5"
              placeholder="Review Details"
              multiline
              textAlignVertical="top"
              value={body}
              onChangeText={setBody}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-50 absolute bottom-0 w-full">
        <View className="px-5 py-4">
          <Pressable 
            className="bg-primary rounded-xl py-4 items-center shadow-lg"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold text-sm tracking-widest uppercase">
              SAVE
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

    </View>
  );
}
