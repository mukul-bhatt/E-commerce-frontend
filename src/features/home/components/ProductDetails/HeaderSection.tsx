import { View, Text } from "react-native";
import { fonts } from "../../../../theme/typography";

const HeaderSection = () => {
    return (
        <View className="p-4 bg-product-headerBackground">
            <Text className="font-bold" style={{ fontFamily: fonts.rubikBold }}>Forever 18</Text>
            <Text className="font-extralight text-sm text-gray-800" style={{ fontFamily: fonts.rubik }}>Party wear women bottle green silk dress sleeveless</Text>
        </View>
    );
}

export default HeaderSection;
