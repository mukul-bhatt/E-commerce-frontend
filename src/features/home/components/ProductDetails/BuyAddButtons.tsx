import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fonts } from "../../../../theme/typography";
import { colors } from "../../../../theme/colors";

const BuyAddButtons = ({ onAddToCartPress }: { onAddToCartPress?: () => void }) => {
    return (
        <View className="flex-row items-center px-4 py-6 bg-white border-t border-gray-100">
            <TouchableOpacity 
                className="flex-1 flex-row items-center justify-center border-2 border-primary rounded-xl h-14 mr-3"
            >
                <MaterialCommunityIcons name="cart-arrow-down" size={24} color={colors.primary} />
                <Text className="text-primary text-xl ml-2" style={{ fontFamily: fonts.rubikBold }}>
                    Buy Now
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={onAddToCartPress}
                className="flex-1 flex-row items-center justify-center bg-primary rounded-xl h-14"
            >
                <MaterialCommunityIcons name="cart-outline" size={24} color="white" />
                <Text className="text-white text-xl ml-2" style={{ fontFamily: fonts.rubikBold }}>
                    Add To cart
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default BuyAddButtons;
