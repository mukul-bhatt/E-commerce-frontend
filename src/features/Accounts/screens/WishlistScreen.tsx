import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text } from "react-native";
import ProductCard from "../../home/components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { fontFamily } from "../../../theme/typography";

const data = [
    {
        id: 1,
        imageUrl: "https://assets0.mirraw.com/images/12864321/image_long_webp.webp?1727455095",
        name: "Ekara Couture",
        description: "Red Up down dress",
        rating: 4.5,
        price: 4999,
        originalPrice: 8599,
        discount: 60,
    },
    {
        id: 2,
        imageUrl: "https://assets0.mirraw.com/images/12864321/image_long_webp.webp?1727455095",
        name: "Ekara Couture",
        description: "Red Up down dress",
        rating: 4.5,
        price: 4999,
        originalPrice: 8599,
        discount: 60,
    },
    {
        id: 3,
        imageUrl: "https://assets0.mirraw.com/images/12864321/image_long_webp.webp?1727455095",
        name: "Ekara Couture",
        description: "Red Up down dress",
        rating: 4.5,
        price: 4999,
        originalPrice: 8599,
        discount: 60,
    },
    {
        id: 4,
        imageUrl: "https://assets0.mirraw.com/images/12864321/image_long_webp.webp?1727455095",
        name: "Ekara Couture",
        description: "Red Up down dress",
        rating: 4.5,
        price: 4999,
        originalPrice: 8599,
        discount: 60,
    },
]


const WishlistScreen = () => {
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            {/* Product Grid */}
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 py-4">
                <View className="flex-row flex-wrap justify-between">
                    {data.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </View>
            </ScrollView>

        </View>
    )
}

export default WishlistScreen
