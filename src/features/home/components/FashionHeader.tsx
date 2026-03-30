import { Image, Pressable, Text, View } from "react-native"
import { fonts } from "../../../theme/typography"
import { useNavigation } from "@react-navigation/native"


const data = [
    {
        id: 1,
        tagName: "Men",
        imgSource: require("../../../assets/FashionImages/Men.jpg")
    },
    {
        id: 2,
        tagName: "Women",
        imgSource: require("../../../assets/FashionImages/Women.jpg")
    },
    {
        id: 3,
        tagName: "Kids",
        imgSource: require("../../../assets/FashionImages/Kids.jpg")
    }
]

const FashionHeader = () => {
    const navigation = useNavigation()
    return (
        <View className="flex-row gap-4">
            {data.map((item) => (
                <Pressable key={item.id} onPress={() => {navigation.navigate("WomensFashion") }}>
                    <View>
                        <Image className="h-20 w-20 rounded-xl" source={item.imgSource} />
                        <Text className="text-center text-sm">{item.tagName}</Text>
                    </View>
                </Pressable>
            ))}
        </View>
    )
}


export default FashionHeader