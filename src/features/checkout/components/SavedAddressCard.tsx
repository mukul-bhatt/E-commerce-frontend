import React, { useState, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AddressActionMenu from './AddressActionMenu';
import DeleteAddressModal from './DeleteAddressModal';

export interface Address {
  id: string;
  tag: 'HOME' | 'WORK' | 'OTHERS';
  name: string;
  details: string;
  phone: string;
}

interface SavedAddressCardProps {
  address: Address;
  onPress?: () => void;
}

import { useNavigation } from '@react-navigation/native';

const SavedAddressCard = ({ address, onPress }: SavedAddressCardProps) => {
  const navigation = useNavigation<any>();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const iconRef = useRef<View>(null);

  const handleDotsPress = () => {
    if (iconRef.current) {
      iconRef.current.measure((x, y, width, height, pageX, pageY) => {
        setMenuPosition({
          x: pageX - 110, // Adjust to pull it more to the left
          y: pageY + height + 5, // Just below the icon
        });
        setIsMenuVisible(true);
      });
    }
  };

  return (
    <Pressable 
      onPress={onPress}
      className="mx-4 mb-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
    >
      <View className="flex-row justify-between items-start mb-2.5">
        <View className="bg-[#E9D9FF] px-3 py-1 rounded-md">
          <Text className="text-[#8B44FF] text-[10px] font-bold tracking-widest">{address.tag}</Text>
        </View>
        <View ref={iconRef} collapsable={false}>
          <Pressable hitSlop={10} onPress={handleDotsPress}>
            <MaterialCommunityIcons name="dots-vertical" size={20} color="#9BA5B7" />
          </Pressable>
        </View>
      </View>
      
      <Text className="text-[15px] font-bold text-gray-900 mb-1.5">{address.name}</Text>
      
      <Text className="text-xs text-gray-500 leading-relaxed mb-2.5">
        {address.details}
      </Text>
      
      <Text className="text-xs text-gray-900 font-semibold">{address.phone}</Text>

      <AddressActionMenu 
        isVisible={isMenuVisible}
        position={menuPosition}
        onClose={() => setIsMenuVisible(false)}
        onEdit={() => navigation.navigate('EditAddress', { address })}
        onDelete={() => setIsDeleteModalVisible(true)}
      />

      <DeleteAddressModal 
        isVisible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={() => console.log('Deleted!', address.id)}
      />

    </Pressable>
  );
};


export default SavedAddressCard;


