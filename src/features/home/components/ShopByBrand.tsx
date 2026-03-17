import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

const CATEGORIES = ["Clothes", "Electronics", "Jewellery", "Shoes", "Beauty", "Home"];

const BRANDS = [
    { id: 1, name: "PANDORA", source: require("../../../assets/ShopByBrandsImages/pandora.jpg") },
    { id: 2, name: "VERDURA", source: require("../../../assets/ShopByBrandsImages/verdura.jpg") },
    { id: 3, name: "TREASURES", source: require("../../../assets/ShopByBrandsImages/treasures.jpg") },
    { id: 4, name: "PANDORA", source: require("../../../assets/ShopByBrandsImages/pandora1.jpg") },
    { id: 5, name: "VERDURA", source: require("../../../assets/ShopByBrandsImages/verdura1.jpg") },
    { id: 6, name: "TREASURES", source: require("../../../assets/ShopByBrandsImages/treasures1.jpg") },
];

const ShopByBrand = () => {
    const [activeCategory, setActiveCategory] = useState("Jewellery");

    return (
        <View className="bg-shopByBrand-background py-8 px-4 rounded-xl gap-2">
            <Text className="text-3xl font-bold text-center">Shop by Brand</Text>
            <Text className="text-center text-xs text-red-500">Up to 50% off</Text>

            {/* Category Tabs */}
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                className="mb-8"
            >
                <View className="flex-row gap-3">
                    {CATEGORIES.map((category) => (
                        <TouchableOpacity
                            key={category}
                            onPress={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-lg ${
                                activeCategory === category 
                                ? "bg-[#FFC91B]" 
                                : "bg-[#D9D9D9]"
                            }`}
                        >
                            <Text className={`text-sm font-medium ${activeCategory === category ? 'text-black' : 'text-[#444]'}`}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Brand Grid */}
            <View className="flex-row flex-wrap justify-between">
                {BRANDS.map((brand) => (
                    <View key={brand.id} className="w-[31%] mb-6 items-center">
                        {/* Image Placeholder */}
                        <View className="w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden mb-2">
                             {/* User will add images here */}
                             <Image source={brand.source} className="w-full h-full" />
                        </View>
                        
                        {/* Brand Label */}
                        <Text className="text-xs font-cormorantGaramond text-center uppercase tracking-widest mt-1">
                            {brand.name}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default ShopByBrand;