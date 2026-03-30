import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { fonts } from "../../../../theme/typography";

const DeliveryAddress = () => {
    return (
        <View className="p-4 border-b border-gray-100">
            <Text className="text-base mb-3" style={{ fontFamily: fonts.rubikBold }}>Deliver to</Text>
            <View className="flex-row items-center justify-between border border-gray-200 p-4 rounded-md">
                <View className="flex-1">
                    <TextInput className="text-sm text-gray-800" style={{ fontFamily: fonts.rubik }}>537first floor Ghazibad</TextInput>
                </View>
                <TouchableOpacity>
                    <Text className="text-purple-700 text-sm" style={{ fontFamily: fonts.rubikBold }}>CHANGE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DeliveryAddress;
