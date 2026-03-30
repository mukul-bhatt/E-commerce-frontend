import { View, Text, Image, TouchableOpacity } from "react-native";
import { fonts } from "../../../../theme/typography";

const ColorScheme = () => {
    return (
        <View className="px-4 py-2 border-b border-gray-100">
            <Text className="text-base" style={{ fontFamily: fonts.rubik }}>
                Colour: <Text style={{ fontFamily: fonts.rubikBold }}>Green</Text>
            </Text>
            <View className="flex-row mt-3 space-x-3 gap-2">
                {[1, 2, 3].map((i) => (
                    <TouchableOpacity key={i} className="border-2 border-green-600 rounded-lg p-0.5">
                        <Image 
                            className="w-16 h-16 rounded-md" 
                            source={{ uri: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' }} 
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View> 
    );
}

export default ColorScheme;
