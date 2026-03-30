import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';

export interface CartItem {
  id: string;
  name: string;
  size: string;
  rating: number;
  reviewCount: number;
  discountPercent: number;
  price: number;
  deliveryDate: string;
  image: any;
  bankOffer?: string;
  quantity: number;
}

interface CartItemCardProps {
  item: CartItem;
  onDelete?: (id: string) => void;
  onQuantityChange?: (id: string, qty: number) => void;
}

const QTY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CartItemCard = ({ item, onDelete, onQuantityChange }: CartItemCardProps) => {
  const [qty, setQty] = useState(item.quantity);
  const [showQtyPicker, setShowQtyPicker] = useState(false);

  const handleQtySelect = (value: number) => {
    setQty(value);
    setShowQtyPicker(false);
    onQuantityChange?.(item.id, value);
  };

  return (
    <View className="px-4 py-4">
      {/* Main row */}
      <View className="flex-row gap-3">
        {/* Product image */}
        <Image
          source={item.image}
          className="w-28 h-32 rounded-xl"
          resizeMode="cover"
        />

        {/* Details */}
        <View className="flex-1">
          {/* Top row: name + delete */}
          <View className="flex-row items-start justify-between">
            <Text className="text-sm font-semibold text-black flex-1 mr-2" numberOfLines={2}>
              {item.name}
            </Text>
            <Pressable onPress={() => onDelete?.(item.id)} hitSlop={8}>
              <MaterialIcons name="delete-outline" size={22} color="#555" />
            </Pressable>
          </View>

          {/* Size */}
          <Text className="text-xs text-[#888] mt-0.5">{item.size}</Text>

          {/* Rating */}
          <View className="flex-row items-center gap-1 mt-1.5">
            <View className="flex-row">
              {[1, 2, 3, 4, 5].map((i) => (
                <FontAwesome
                  key={i}
                  name={i <= Math.round(item.rating) ? 'star' : 'star-o'}
                  size={12}
                  color={colors.ratings.star}
                />
              ))}
            </View>
            <Text className="text-xs text-[#555]">
              {item.rating} • ({item.reviewCount})
            </Text>
          </View>

          {/* Discount + Price */}
          <View className="flex-row items-center gap-2 mt-1.5">
            <Text className="text-xs font-semibold text-discountOnBrands-green">
              {item.discountPercent}% Off
            </Text>
            <Text className="text-sm font-bold text-black">₹{item.price}</Text>
          </View>

          {/* Delivery info */}
          <View className="flex-row items-center gap-1 mt-1.5">
            <MaterialCommunityIcons name="truck-delivery-outline" size={14} color="#333" />
            <Text className="text-xs text-[#444]">
              Get assured delivery by {item.deliveryDate}
            </Text>
          </View>

          {/* Qty selector */}
          <View className="mt-2 self-start relative">
            <Pressable
              onPress={() => setShowQtyPicker((v) => !v)}
              className="flex-row items-center gap-1 px-3 py-1 rounded-md border border-cardStroke"
            >
              <Text className="text-xs font-medium text-black">Qty: {qty}</Text>
              <MaterialIcons name="arrow-drop-down" size={16} color="#333" />
            </Pressable>

            {/* Inline dropdown */}
            {showQtyPicker && (
              <View className="absolute top-8 left-0 bg-white rounded-lg border border-cardStroke shadow-sm z-10 w-20">
                {QTY_OPTIONS.map((q) => (
                  <Pressable
                    key={q}
                    onPress={() => handleQtySelect(q)}
                    className={`px-3 py-2 ${q === qty ? 'bg-primary/10' : ''}`}
                  >
                    <Text className={`text-xs ${q === qty ? 'text-primary font-semibold' : 'text-black'}`}>
                      {q}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Bank offer (optional) */}
      {item.bankOffer && (
        <Text className="text-xs text-discountOnBrands-green mt-2">{item.bankOffer}</Text>
      )}
    </View>
  );
};

export default CartItemCard;
