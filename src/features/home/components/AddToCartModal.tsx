import React, { useState } from 'react';
import { View, Text, Modal, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { fonts } from '../../../theme/typography';

interface AddToCartModalProps {
  isVisible: boolean;
  onClose: () => void;
  productName: string;
  productImage: any;
  onAddToCart: (selection: { size: string; color: string }) => void;
}

const SIZES = ['S', 'M', 'L', 'XL'];
const COLOURS = [
  { id: 'red', name: 'RED', hex: '#E57373' },
  { id: 'green', name: 'GREEN', hex: '#4CAF50' },
  { id: 'yellow', name: 'YELLOW', hex: '#FFF176' },
];

const AddToCartModal = ({ isVisible, onClose, productName, productImage, onAddToCart }: AddToCartModalProps) => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('green');

  if (!isVisible) return null;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50 px-6">
        <Pressable className="absolute inset-0" onPress={onClose} />
        
        <View className="w-full bg-white rounded-2xl p-6 shadow-xl relative">
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
            className="text-lg font-bold color-black mb-6 pr-8"
            style={{ fontFamily: fonts.rubikBold }}
          >
            Add {productName} to Cart
          </Text>

          <View className="flex-row mb-8">
            {/* Product Image */}
            <Image 
              source={typeof productImage === 'string' ? { uri: productImage } : productImage} 
              className="w-24 h-24 rounded-lg bg-gray-100 mr-4"
              resizeMode="cover"
            />
            
            <View className="flex-1">
              {/* Select size */}
              <View className="mb-4">
                <Text 
                  className="text-sm color-gray-500 mb-2"
                  style={{ fontFamily: fonts.rubik }}
                >
                  Select size
                </Text>
                <View className="flex-row gap-2">
                  {SIZES.map((size) => (
                    <Pressable
                      key={size}
                      onPress={() => setSelectedSize(size)}
                      className={`w-10 h-8 items-center justify-center rounded ${
                        selectedSize === size ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    >
                      <Text 
                        className={`text-xs ${selectedSize === size ? 'color-white' : 'color-black'}`}
                        style={{ fontFamily: fonts.rubikMedium }}
                      >
                        {size}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Select Colour */}
              <View>
                <Text 
                  className="text-sm color-gray-500 mb-2"
                  style={{ fontFamily: fonts.rubik }}
                >
                  Select Colour
                </Text>
                <View className="flex-row gap-2">
                  {COLOURS.map((color) => (
                    <Pressable
                      key={color.id}
                      onPress={() => setSelectedColor(color.id)}
                      className={`px-3 py-1.5 rounded items-center justify-center border-2 ${
                        selectedColor === color.id ? 'border-primary' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      <Text 
                        className="text-[10px] font-bold color-black"
                        style={{ fontFamily: fonts.rubikBold }}
                      >
                        {color.name}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Add to Cart Button */}
          <Pressable 
            className="w-full h-12 bg-primary rounded-lg items-center justify-center"
            onPress={() => onAddToCart({ size: selectedSize, color: selectedColor })}
          >
            <Text 
              className="text-white text-base"
              style={{ fontFamily: fonts.rubikMedium }}
            >
              ADD TO CART
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
