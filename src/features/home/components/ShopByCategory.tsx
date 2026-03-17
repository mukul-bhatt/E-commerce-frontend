import { View, Text, FlatList, Image } from "react-native"
import HeadingWithRightArrowIcon from "../components/HeadingWithRightArrowIcon"

const shopByCategoryData = [
    {id: 1, image: require("../../../assets/CategoryItemImages/category-1.jpg")},
    {id: 2, image: require("../../../assets/CategoryItemImages/category-2.jpg")},
    {id: 3, image: require("../../../assets/CategoryItemImages/category-3.jpg")},
    {id: 4, image: require("../../../assets/CategoryItemImages/category-4.jpg")},
    {id: 5, image: require("../../../assets/CategoryItemImages/category-5.jpg")},
]

const ShopByCategory = () => {
    return (
        <View>
            <HeadingWithRightArrowIcon title="Shop by Category" />
            <HorizontalScroll />
        </View>
    )
}

export default ShopByCategory




const HorizontalScroll = () => {
    return (
        <View>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shopByCategoryData}
            renderItem={({item}) => (
                <View className="rounded-lg bg-primary">
                    <Image source={item.image} className="w-36 h-36 rounded-t-lg"/>
                    <Text className="text-md text-white font-bold font-sans text-center"> Fashion</Text>
                </View>
            )}
            ItemSeparatorComponent={() => <View className="w-4" />}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}