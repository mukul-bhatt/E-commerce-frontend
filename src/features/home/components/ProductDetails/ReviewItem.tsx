import { View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { fonts } from "../../../../theme/typography";

const ReviewItem = () => {
    return (
        <View className="flex-row items-flex-start">
            <Image 
                source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
                className="w-10 h-10 rounded-full"
            />
            <View className="ml-3 flex-1">
                <View className="flex-row items-center">
                    <Text className="text-gray-600 text-sm" style={{ fontFamily: fonts.rubik }}>
                        Shweta Tiwari , Delhi
                    </Text>
                    <View className="ml-1 bg-[#1E1E1E] rounded-full p-0.5">
                        <AntDesign name="check" size={8} color="white" />
                    </View>
                </View>
                
                <View className="flex-row mt-1">
                    <View className="bg-discountOnBrands-green flex-row items-center px-2 py-0.5 rounded gap-1">
                        <Text className="text-white text-xs" style={{ fontFamily: fonts.rubikBold }}>4</Text>
                        <AntDesign name="star" size={10} color="white" />
                    </View>
                </View>

                <Text className="text-md font-bold mt-2 text-black" style={{ fontFamily: fonts.rubikBold }}>
                    Teriffic purchase
                </Text>
                
                <Text className="text-gray-500 text-sm mt-1 leading-5" style={{ fontFamily: fonts.rubik }}>
                    This dress is so beautiful , the fabric is good . fitting is nice and it looks so good on me ,
                </Text>
                
                <Text className="text-gray-400 text-[10px] mt-4" style={{ fontFamily: fonts.rubik }}>
                    Posted 1yr ago
                </Text>
            </View>
        </View>
    );
}

export default ReviewItem;
