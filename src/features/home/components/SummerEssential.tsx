import { ImageBackground, Text, View } from "react-native"
import { fonts } from "../../../theme/typography"

const data = [

    {
        id:1,
        imgSource: require("../../../assets/SummerEssentials/img1.jpg"),
        heading: "Shop Now",
        subHeading: "Upto 15% off",
        
    },
    {
        id:2,
        imgSource: require("../../../assets/SummerEssentials/img2.jpg"),
        heading: "Slippers",
        subHeading: "Upto 15% off",
        
    },
    {
        id:3,
        imgSource: require("../../../assets/SummerEssentials/img3.jpg"),
        heading: "Floaties",
        subHeading: "Upto 15% off",
        
    },
    {
        id:4,
        imgSource: require("../../../assets/SummerEssentials/img4.jpg"),
        heading: "Sunscreens",
        subHeading: "Upto 15% off",
        
    },
    {
        id:5,
        imgSource: require("../../../assets/SummerEssentials/img5.jpg"),
        heading: "Hats and Caps",
        subHeading: "Upto 15% off",
        
    },
    {
        id:6,
        imgSource: require("../../../assets/SummerEssentials/img6.jpg"),
        heading: "Shorts",
        subHeading: "Upto 15% off",
        
    },
]

const SummerEssential = () => {
    return (
        <View>
            <ImageBackground source={require("../../../assets/SummerEssentials/SummerEssentials.jpg")} className="w-full h-[400px]">
                <Text className="text-center pt-8 text-4xl text-white" style={{ fontFamily: fonts.pirataOne }}>SummerEssential</Text>
                <Text className="text-center text-white text-lg font-medium">Biggest Price drop on all your needs</Text>


                <View className="flex-row flex-wrap gap-x-2 gap-y-2 justify-center mt-4">
                    {data.map((item) => (
                        <View key={item.id} className="w-[30%] h-40 rounded-xl overflow-hidden shadow-sm">
                            <ImageBackground 
                                source={item.imgSource} 
                                className="flex-1 justify-end bg-black/10 "
                                resizeMode="cover"
                            >
                                {/* Dark overlay for text readability */}
                                <View className="px-2 py-3 bg-black/40">
                                    <Text className="text-white text-center font-bold text-sm" numberOfLines={1}>
                                        {item.heading}
                                    </Text>
                                    <Text className="text-white text-center text-[10px]" numberOfLines={1}>
                                        {item.subHeading}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    ))}
                </View>

            </ImageBackground>
        </View>
    )
}

export default SummerEssential