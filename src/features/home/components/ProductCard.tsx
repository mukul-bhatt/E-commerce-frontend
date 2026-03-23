import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface ProductCardProps {
    imageUrl: string;
    name: string;
    description: string;
    rating: number;
    price: number;
    originalPrice: number;
    discount: number;
}


const ProductCard = ({imageUrl, name, description, rating, price, originalPrice, discount}: ProductCardProps) => {

    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();

    return (
        <View className="w-[49%] mb-4 bg-white rounded-xl overflow-hidden">
            {/* Image Section */}
            <Pressable onPress={() => navigation.navigate('ProductDetails')}>
            <View className="relative">
                <Image
                    source={{ uri: imageUrl }} 
                    className="w-full h-64"
                    resizeMode="cover"
                />
                <Pressable className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-lg shadow-sm">
                   {isLiked ? 
                   <Ionicons name="heart" size={20} color="red" onPress={() => setIsLiked(false)} /> 
                   : 
                   <Ionicons name="heart-outline" size={20} color="black" onPress={() => setIsLiked(true)} /> 
                } 
                </Pressable>
            </View>

            {/* Details Section */}
            <View className="p-2">
                <Text className="text-lg font-bold text-[#444444]" numberOfLines={1}>{name}</Text>
                <Text className="text-sm text-gray-500 mb-1" numberOfLines={1}>{description}</Text>
                
                {/* Rating Row */}
                <View className="flex-row items-center gap-1 mb-1">
                    <View className="flex-row">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <FontAwesome key={i} name="star" size={14} color="#008800" />
                        ))}
                    </View>
                    <Text className="text-xs text-gray-400 ml-1">({rating})</Text>
                </View>

                {/* Price Row */}
                <View className="flex-row items-center gap-2">
                    <Text className="text-base font-bold text-black">₹{price}</Text>
                    <Text className="text-sm text-gray-400 line-through">₹{originalPrice}</Text>
                    <Text className="text-sm text-discountOnBrands-green font-medium">Save {discount}%</Text>
                </View>
            </View>
            </Pressable>
        </View>
    );
};

export default ProductCard;