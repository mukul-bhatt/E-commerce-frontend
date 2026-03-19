import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { fonts } from "../../../theme/typography"


const brandInFocusData = [
    {
        id: 1,
        image: require("../../../assets/BrandsInFocus/Nayara.png"),
        logo: require("../../../assets/BrandsInFocus/NYARA.png"),
        discount: "min 30% off"
    },
    {
        id: 2,
        image: require("../../../assets/BrandsInFocus/Nayara.png"), // Reusing for demo
        logo: require("../../../assets/BrandsInFocus/NYARA.png"),
        discount: "min 30% off"
    }
]

const BrandsInFocus = () => {
    return (
        <View className="bg-shopByBrand-background py-6">
            {/* Header */}
            <View className="px-4 mb-4">
                <Text className="text-3xl text-center text-primary font-bold" style={{ fontFamily: fonts.gidugu }}>BRANDS IN FOCUS</Text>
                <Text className="text-gray-600 text-sm text-center">Season's latest Trends</Text>
            </View>

            {/* Horizontal scroll section */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="px-4"
            >
                {brandInFocusData.map((item) => (
                    <BrandCard key={item.id} item={item} />
                ))}
            </ScrollView>
        </View>
    )
}

export default BrandsInFocus

const BrandCard = ({ item }: { item: any }) => {
    return (
        <View className="mr-4 w-80 h-44 rounded-lg overflow-hidden">
            <ImageBackground
                source={item.image}
                className="flex-1 justify-end items-center pb-4"
                resizeMode="cover"
            >
                {/* Purple linear gradient - strongest at bottom, fades by the middle */}
                <LinearGradient
                    colors={['#4C1D95', 'transparent']}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 0.5, y: 0.4 }}
                    style={StyleSheet.absoluteFill}
                />

                <Image
                    source={item.logo}
                    className="w-32 h-8"
                    resizeMode="contain"
                    style={{ tintColor: 'white' }}
                />
                <Text className="text-white text-md font-medium">{item.discount}</Text>
            </ImageBackground>

        </View>
    )
}