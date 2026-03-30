import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { fonts } from "../../../../theme/typography";

const SizeSection = () => {
    return (
        <View className="p-4 border-b border-gray-100">
            <Text className="text-base mb-3" style={{ fontFamily: fonts.rubikBold }}>Size</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                    <TouchableOpacity key={size} className="border border-gray-300 w-12 h-12 items-center justify-center mr-3 bg-white">
                        <Text className="text-base" style={{ fontFamily: fonts.rubik }}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default SizeSection;
