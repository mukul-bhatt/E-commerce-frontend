import { Text, View, Image, Touchable, TouchableOpacity } from "react-native"
import { fonts } from "../../../theme/typography"

const data = [
    {
        id: 1,
        tagName: "Top Wear",
        imgSource: require("../../../assets/FashionCategoryImages/TopWear.jpg")
    },
    {
        id: 2,
        tagName: "Bottom Wear",
        imgSource: require("../../../assets/FashionCategoryImages/BottomWear.png")
    },
    {
        id: 3,
        tagName: "Dress",
        imgSource: require("../../../assets/FashionCategoryImages/Dress.png")
    },
    {
        id: 4,
        tagName: "Formals",
        imgSource: require("../../../assets/FashionCategoryImages/Formals.png")
    },
    {
        id: 5,
        tagName: "Saree",
        imgSource: require("../../../assets/FashionCategoryImages/Saree.png")
    },
    {
        id: 6,
        tagName: "Heels",
        imgSource: require("../../../assets/FashionCategoryImages/Heels.png")
    },
    {
        id: 7,
        tagName: "KurtaSets",
        imgSource: require("../../../assets/FashionCategoryImages/KurtaSets.png")
    },
    {
        id: 8,
        tagName: "Turtleneck",
        imgSource: require("../../../assets/FashionCategoryImages/Watch.png")
    },
    
]


const ShopByCategoryBanner = () => {
    return (
        <View className="bg-shopByBrand-background">
            <Text className="text-2xl mb-4 text-center pt-4" style={{ fontFamily: fonts.girassol }}>Shop By Category</Text>
            <RowElement />
            
        </View>
    )
}

export default ShopByCategoryBanner

const RowElement = () => {
    return (
        <View className="flex-row flex-wrap gap-x-1 px-4">
            {data.map((item) => (
                
                <View key={item.id} className="basis-[32%] mb-4">
                    <TouchableOpacity>
                    <Image 
                        className="h-32 w-full rounded-lg" 
                        style={{ resizeMode: 'cover' }}
                        source={item.imgSource} 
                    />
                    <Text className="text-center text-sm mt-1">{item.tagName}</Text>
                     </TouchableOpacity>
                </View>
               
            ))}
        </View>
    )
}