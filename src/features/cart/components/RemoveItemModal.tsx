import React from 'react';
import { View, Text, Modal, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CartItem } from './CartItemCard';
import { fonts } from '../../../theme/typography';

interface RemoveItemModalProps {
  isVisible: boolean;
  item: CartItem | null;
  onClose: () => void;
  onRemove: (id: string) => void;
  onMoveToWishlist?: (id: string) => void;
}

const RemoveItemModal = ({ isVisible, item, onClose, onRemove, onMoveToWishlist }: RemoveItemModalProps) => {
  if (!item) return null;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <Pressable className="absolute inset-0" onPress={onClose} />
        
        <View className="w-[85%] bg-white rounded-2xl p-6 shadow-xl">
          {/* Close Button */}
          <Pressable 
            onPress={onClose} 
            className="absolute right-4 top-4 z-10" 
            hitSlop={10}
          >
            <MaterialIcons name="close" size={24} color="#000" />
          </Pressable>

          {/* Title */}
          <Text 
            className="text-lg leading-6 color-black mb-5 mt-2 pr-6"
            style={{ fontFamily: fonts.rubik }}
          >
            Are You sure you want to remove this product from cart ?
          </Text>

          {/* Item Row */}
          <View className="flex-row items-center py-3 border-t border-b border-gray-100 mb-6">
            <Image 
              source={item.image} 
              className="w-16 h-16 rounded-lg mr-3" 
              resizeMode="cover" 
            />
            <View className="flex-1">
              <Text 
                className="text-sm font-medium color-black"
                numberOfLines={1}
                style={{ fontFamily: fonts.rubikMedium }}
              >
                {item.name}
              </Text>
              <Text 
                className="text-xs color-gray-500 mt-0.5"
                style={{ fontFamily: fonts.rubik }}
              >
                Sold by octave Ltd
              </Text>
              <Text 
                className="text-xs color-gray-500 mt-0.5"
                style={{ fontFamily: fonts.rubik }}
              >
                {item.size}
              </Text>
            </View>
          </View>

          {/* Actions */}
          <View className="flex-row gap-3">
            <Pressable 
              className="flex-1 h-12 rounded-lg border border-primary justify-center items-center"
              onPress={() => onMoveToWishlist?.(item.id)}
            >
              <Text 
                className="text-sm color-primary"
                style={{ fontFamily: fonts.rubikMedium }}
              >
                Move to Wishlist
              </Text>
            </Pressable>
            
            <Pressable 
              className="flex-1 h-12 rounded-lg bg-primary justify-center items-center"
              onPress={() => onRemove(item.id)}
            >
              <Text 
                className="text-sm color-white"
                style={{ fontFamily: fonts.rubikMedium }}
              >
                Remove
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveItemModal;
