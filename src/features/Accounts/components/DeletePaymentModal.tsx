import React from 'react';
import { Modal, View, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface DeletePaymentModalProps {
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
  type: string; // 'Card' or 'UPI ID'
}

const DeletePaymentModal = ({ isVisible, onClose, onDelete, type }: DeletePaymentModalProps) => {
  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center bg-black/50 px-8">
          <TouchableWithoutFeedback>
            <View className="bg-white w-full rounded-3xl p-6 shadow-xl relative">
              {/* Close Button */}
              <Pressable 
                onPress={onClose}
                className="absolute right-4 top-4 p-2 z-10"
              >
                <Feather name="x" size={20} color="#111827" />
              </Pressable>

              <View className="mt-4 mb-8">
                <Text className="text-lg font-semibold text-gray-900 leading-7">
                  Are you sure you want to delete this {type}?
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Pressable 
                  onPress={onClose}
                  className="flex-1 h-12 border border-primary rounded-xl items-center justify-center mr-3"
                >
                  <Text className="text-primary font-bold text-sm">Cancel</Text>
                </Pressable>

                <Pressable 
                  onPress={onDelete}
                  className="flex-1 h-12 bg-primary rounded-xl items-center justify-center"
                >
                  <Text className="text-white font-bold text-sm">Delete</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DeletePaymentModal;
