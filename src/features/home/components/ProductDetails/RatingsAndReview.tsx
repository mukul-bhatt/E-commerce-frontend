import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { fonts } from "../../../../theme/typography";
import { colors } from "../../../../theme/colors";
import ReviewItem from "./ReviewItem";

const RatingsAndReview = ({ onRateProductPress }: { onRateProductPress?: () => void }) => {
    return (
        <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold" style={{ fontFamily: fonts.rubikBold }}>
                    Ratings & Reviews
                </Text>
                <TouchableOpacity 
                    onPress={onRateProductPress}
                    className="bg-primary px-4 py-2 rounded-lg"
                >
                    <Text className="text-white text-sm font-bold" style={{ fontFamily: fonts.rubikMedium }}>
                        Rate Product
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity className="flex-row items-center gap-2 bg-discountOnBrands-green w-20 h-10 rounded-lg justify-center">
                    <Text className="text-lg text-white font-extrabold" style={{ fontFamily: fonts.rubikBold }}>
                        4.8 
                    </Text>
                    <AntDesign name="star" size={20} color={"white"} />
                </TouchableOpacity>
            </View>

            <View>
                <Text className="text-md font-bold pt-2" style={{ fontFamily: fonts.rubikBold }}>
                    What customers say about this product
                </Text>

                <View className="mt-4 gap-y-3">
                    {[
                        { label: "Size/Fit of the product", rating: 5 },
                        { label: "Colour", rating: 4 },
                        { label: "Fabric", rating: 3 },
                        { label: "Style", rating: 5 },
                    ].map((item, index) => (
                        <View key={index} className="flex-row items-center justify-between">
                            <Text className="text-base text-black" style={{ fontFamily: fonts.rubik }}>
                                {item.label}
                            </Text>
                            <View className="flex-row gap-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <AntDesign 
                                        key={star} 
                                        name="star" 
                                        size={22} 
                                        color={star <= item.rating ? colors.discountOnBrands.green : "#E0E0E0"} 
                                    />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default RatingsAndReview;
