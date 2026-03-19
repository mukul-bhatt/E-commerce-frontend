import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal, Pressable, KeyboardAvoidingView, Platform } from "react-native";


import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";


const AddressModal = ({ visible, setVisible }: { visible: boolean, setVisible: (visible: boolean) => void }) => {


  const [selected, setSelected] = useState(0);

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent={true}
      onRequestClose={() => setVisible(false)}
    >
      <Pressable
        className='flex-1 justify-end bg-black/50'
        onPress={() => setVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        >
          <Pressable
            className='bg-white rounded-t-3xl p-6'
            onPress={(e) => e.stopPropagation()} // Prevents the backdrop click from triggering inside the content area
          >
            {/* Header */}
            <View className='flex-row justify-between items-center mb-4'>
              <Text className='text-xl font-bold'>Change delivery Location</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <MaterialCommunityIcons name="close" size={24} color="black" hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} />
              </TouchableOpacity>
            </View>

            {/* Line Separator */}
            <View className='h-[1px] bg-gray-200 w-full mb-6' />

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
              <Text className="text-lg font-bold mb-3">Enter Pincode</Text>
              <View className="flex-row items-center border border-gray-300 rounded-xl p-1">
                <TextInput
                  placeholder="Enter Pincode"
                  className="flex-1 px-4 py-2 text-black"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                />
                <TouchableOpacity className="bg-[#673AB7] px-6 py-2 rounded-lg m-1">
                  <Text className="text-white font-bold">Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>

    </Modal>
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



// Features List Pending:
// 3. Keyboard avoiding view for pincode entering
// 4. On tap of any card, it should get selected and the previous selected card should get deselected

