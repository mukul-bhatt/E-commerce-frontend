import { View, Text, TouchableOpacity, ScrollView, TextInput, Platform, KeyboardAvoidingView, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddressModal = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <Pressable className='flex-1 bg-black/50' onPress={() => navigation.goBack()}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1 justify-end"
      >
        <Pressable 
          onPress={(e) => e.stopPropagation()}
          className='bg-white px-6 pt-6 rounded-t-3xl' 
          style={{ 
            paddingBottom: Platform.OS === 'ios' ? Math.max(insets.bottom, 24) : 24, // Fixes iOS bottom gap while keeping Android safe
            maxHeight: '90%'
          }}
        >
          {/* Header */}
          <View className='flex-row justify-between items-center mb-4 mt-2'>
            <Text className='text-xl font-bold'>Change delivery Location</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="close" size={24} color="black" hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} />
            </TouchableOpacity>
          </View>

          {/* Line Separator */}
          <View className='h-[1px] bg-gray-200 w-full mb-6' />

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            {/* Previously saved Locations block */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-6"
            >
              <TouchableOpacity onPress={() => setSelected(0)}>
                <AddressCard selected={selected === 0} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelected(1)}>
                <AddressCard selected={selected === 1} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelected(2)}>
                <AddressCard selected={selected === 2} />
              </TouchableOpacity>
            </ScrollView>

            <Text className="text-gray-400 mb-6">Or--</Text>

            <View className="mb-4">
              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-lg font-bold">Enter Pincode</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddAddress' as never)}>
                  <Text className="text-primary font-bold">Add New Address</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center border border-gray-300 rounded-xl p-1">

                <TextInput
                  placeholder="Enter Pincode"
                  className="flex-1 px-4 py-2 text-black"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                />
                <TouchableOpacity className="bg-primary px-6 py-2 rounded-lg m-1">
                  <Text className="text-white font-bold">Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </Pressable>
  )
}

export default AddressModal

const AddressCard = ({ selected }: { selected: boolean }) => {
  return (
    <View className={`${selected ? 'bg-[#E8E1F5] border-[#673AB7]' : 'bg-white border-gray-200'} border p-4 rounded-xl w-72 mr-4`}>
      <Text className='text-lg font-bold mb-1'>Ishika Singh</Text>
      <Text className='text-sm text-gray-600 mb-2 leading-5' numberOfLines={3}>
        224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017
      </Text>
      <Text className='text-[#673AB7] text-sm font-medium'>Home</Text>
    </View>
  )
}

