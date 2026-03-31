import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

interface AddressActionMenuProps {
  isVisible: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const AddressActionMenu = ({ isVisible, position, onClose, onEdit, onDelete }: AddressActionMenuProps) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        className="flex-1 bg-transparent"
        activeOpacity={1} 
        onPress={onClose}
      >
        <View 
          className="absolute bg-white rounded-lg w-[120px] shadow-sm border border-gray-200"
          style={{ top: position.y, left: position.x }}
        >
          <TouchableOpacity 
            className="py-3 px-5 border-b border-gray-100"
            onPress={() => {
              onEdit();
              onClose();
            }}
          >
            <Text className="text-[13px] text-gray-700 font-medium">Edit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="py-3 px-5"
            onPress={() => {
              onDelete();
              onClose();
            }}
          >
            <Text className="text-[13px] text-gray-700 font-medium">Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddressActionMenu;


