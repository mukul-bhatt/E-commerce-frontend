import React from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface DeleteAddressModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteAddressModal = ({ isVisible, onClose, onConfirm }: DeleteAddressModalProps) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="bg-white rounded-3xl w-[85%] shadow-2xl elevation-10">
          {/* Header with Close Icon */}
          <View className="flex-row justify-end p-4 pb-0">
            <TouchableOpacity onPress={onClose} hitSlop={10}>
              <Feather name="x" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          {/* Content */}
          <View className="items-center px-10 pb-8">
            <Text className="text-[16px] font-bold text-gray-900 text-center leading-relaxed">
              Are you sure you want to delete this Address?
            </Text>
          </View>
          
          {/* Action Buttons */}
          <View className="flex-row px-5 pb-8 justify-between">
            <Pressable 
              className="flex-1 mr-2 px-6 py-3 rounded-xl border border-primary bg-white items-center"
              onPress={onClose}
            >
              <Text className="text-primary font-bold text-sm tracking-wide">Cancel</Text>
            </Pressable>
            
            <Pressable 
              className="flex-1 ml-2 px-6 py-3 rounded-xl bg-primary items-center"
              onPress={() => {
                onConfirm();
                onClose();
              }}
            >
              <Text className="text-white font-bold text-sm tracking-wide">Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAddressModal;

