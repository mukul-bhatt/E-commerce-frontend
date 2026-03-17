import HeadingWithRightArrowIcon from "./HeadingWithRightArrowIcon"
import {FlatList, Image, Text, View} from 'react-native'
import { Ionicons } from "@expo/vector-icons"


export const data = [
    {
        id: 1, 
        image: require("../../../assets/CategoryItemImages/category-1.jpg"),
        brand: "Mr Style Co.",
        description: "Solid men regular fit",
        rating: 5,
        ratingCount: 677,
        price: 899,
        originalPrice: 2999,
        discount: 60
    },
    {
        id: 2, 
        image: require("../../../assets/CategoryItemImages/category-2.jpg"),
        brand: "Urban Wear",
        description: "Casual cotton t-shirt",
        rating: 4,
        ratingCount: 120,
        price: 499,
        originalPrice: 999,
        discount: 50
    },
    {
        id: 3, 
        image: require("../../../assets/CategoryItemImages/category-3.jpg"),
        brand: "Denim Co.",
        description: "Slim fit blue jeans",
        rating: 5,
        ratingCount: 850,
        price: 1299,
        originalPrice: 2499,
        discount: 48
    },
    {
        id: 4, 
        image: require("../../../assets/CategoryItemImages/category-4.jpg"),
        brand: "Sporty Plus",
        description: "Running shoes pro",
        rating: 4,
        ratingCount: 432,
        price: 2499,
        originalPrice: 4999,
        discount: 50
    },
    {
        id: 5, 
        image: require("../../../assets/CategoryItemImages/category-5.jpg"),
        brand: "Classy Fits",
        description: "Formal linen shirt",
        rating: 5,
        ratingCount: 215,
        price: 1599,
        originalPrice: 3199,
        discount: 50
    },
]

const SuggestedForYou = () => {
    return (
        <View>
            <HeadingWithRightArrowIcon title="Suggested For You" />
            <HorizontalScrollListForSuggestedForYouItems />
        </View>
    )
}

export default SuggestedForYou


export const HorizontalScrollListForSuggestedForYouItems = () => {
    return (
        <View>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
                <SuggestedForYouCard item={item} />
            )}
            ItemSeparatorComponent={() => <View className="w-4" />}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const SuggestedForYouCard = ({item}: {item: any}) => {
    return (
        <View className="w-40 rounded-lg overflow-hidden border border-gray-100 bg-white">
            <Image source={item.image} className="w-full h-48"/>
            <View className="p-2">
                <Text className="text-lg font-bold text-gray-800" numberOfLines={1}>{item.brand}</Text>
                <Text className="text-sm text-gray-500" numberOfLines={1}>{item.description}</Text>
                
                <View className="flex-row items-center my-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Ionicons 
                            key={star} 
                            name="star" 
                            size={14} 
                            color={star <= item.rating ? "#16a34a" : "#d1d5db"} 
                        />
                    ))}
                    <Text className="text-xs text-gray-400 ml-1">({item.ratingCount})</Text>
                </View>

                <View className="flex-row items-center gap-1">
                    <Text className="text-md font-bold text-gray-900">₹{item.price}</Text>
                    <Text className="text-xs text-gray-400 line-through">₹{item.originalPrice}</Text>
                    <Text className="text-xs text-green-600 font-bold">Save {item.discount}%</Text>
                </View>

                {item.isTopProduct && <View className="bg-[#FFE19B] rounded-sm px-2 py-1 self-start">
                    <Text className="text-xs text-[#FF7F35]">Top Product</Text>
                </View>}
            </View>
        </View>
    )
}