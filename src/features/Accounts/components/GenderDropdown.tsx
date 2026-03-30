import React from 'react';
import { View, Text, Pressable, Modal, TouchableOpacity, FlatList } from 'react-native';

const GENDER_OPTIONS = ['Male', 'Female', 'Prefer Not to say', 'Non-binary'];

interface GenderDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (gender: string) => void;
  currentValue: string;
}

const GenderDropdown = ({ isVisible, onClose, onSelect, currentValue }: GenderDropdownProps) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
    >

      <TouchableOpacity 
        className="flex-1 bg-black/30 justify-center items-center"
        onPress={onClose}
        activeOpacity={1}
      >

        <View className="bg-white rounded-2xl w-[80%] overflow-hidden shadow-2xl">
          <View className="border-b border-gray-100 p-4 items-center">
            <Text className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Select Gender</Text>
          </View>
          
          {GENDER_OPTIONS.map((option, index) => (
            <TouchableOpacity 
              key={option}
              className={`p-4 items-center ${index < GENDER_OPTIONS.length - 1 ? 'border-b border-gray-50' : ''}`}
              onPress={() => {
                onSelect(option);
                onClose();
              }}
            >
              <Text className={`text-[15px] ${currentValue === option ? 'text-primary font-bold' : 'text-gray-900 font-semibold'}`}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default GenderDropdown;
