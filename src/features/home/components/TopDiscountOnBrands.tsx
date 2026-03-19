import { FlatList, Image, Text, View, TouchableOpacity } from "react-native"
import HeadingWithRightArrowIcon from "./HeadingWithRightArrowIcon"

const brandData = [
    {
        id: 1,
        brandName: "ANNDD",
        deal: "Starting from ₹149",
        // Using a placeholder style view since real images will be added manually
        image: require("../../../assets/TopDiscountOnBrandsImages/image1.png")
    },
    {
        id: 2,
        brandName: "Louis Phil",
        deal: "Starting from ₹149",
        image: require("../../../assets/TopDiscountOnBrandsImages/image2.png")
    },
    {
        id: 3,
        brandName: "Firstty",
        deal: "Starting from ₹149",
        image: require("../../../assets/TopDiscountOnBrandsImages/image3.png")
    },
    {
        id: 4,
        brandName: "Roadster",
        deal: "Starting from ₹199",
        image: require("../../../assets/TopDiscountOnBrandsImages/image3.png")
    }
]

const TopDiscountOnBrands = () => {
    return (
        <View className="mb-6">
            <Text className="text-2xl font-bold mb-4 pt-4">Top Discounts on Top Brands</Text>
            
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={brandData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} className="mr-4 w-40 border border-gray-200 rounded-xl overflow-hidden bg-white">
                        {/* Image Placeholder */}
                        <View className="h-48 w-full bg-gray-200 items-center justify-center">
                            <Image source={item.image} className="w-full h-full" style={{ resizeMode: 'cover' }} />
                        </View>
                        
                        <View className="p-3">
                            <Text className="text-lg font-bold text-black" numberOfLines={1}>
                                {item.brandName}
                            </Text>
                            <Text className="text-discountOnBrands-green font-medium text-sm mt-1">
                                {item.deal}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default TopDiscountOnBrands