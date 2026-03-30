import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { fonts } from "../../../../theme/typography";
import { colors } from "../../../../theme/colors";

const RatingsAndPrice = () => {
    return (
        <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <AntDesign key={i} name="star" size={16} color={colors.discountOnBrands.green} />
                ))}
                <Text className="ml-2 text-blue-500" style={{ fontFamily: fonts.rubik }}>4.7</Text>
                <Text className="text-gray-400" style={{ fontFamily: fonts.rubik }}> 324 reviews</Text>
            </View>

            <View className="flex-row items-center mt-3 gap-3">
                <Text className="text-2xl" style={{ fontFamily: fonts.rubikBold }}>₹1899</Text>
                <Text className="text-gray-400 line-through" style={{ fontFamily: fonts.rubik }}>₹2899</Text>
                <View className="bg-discountOnBrands-green px-2 py-1 rounded">
                    <Text className="text-white text-xs" style={{ fontFamily: fonts.rubikBold }}>Save 54%</Text>
                </View>
            </View>
        </View>
    );
}

export default RatingsAndPrice;
