import { Image, Text, View } from "react-native"
import { fonts } from "../../../theme/typography"


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
    return (
        <View className="flex-row gap-4">
            {data.map((item) => (
                <View key={item.id}>
                    <Image className="h-20 w-20 rounded-xl" source={item.imgSource} />
                    <Text className="text-center text-sm">{item.tagName}</Text>
                </View>
            ))}
        </View>
    )
}


export default FashionHeader