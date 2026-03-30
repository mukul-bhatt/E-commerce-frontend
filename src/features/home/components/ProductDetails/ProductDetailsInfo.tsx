import { View, Text } from "react-native";
import { fonts } from "../../../../theme/typography";

const ProductDetailsInfo = () => {
    const details = [
        { label: "Style Number", value: "S675" },
        { label: "Occasion", value: "Casual Power" },
        { label: "Top and Dress style", value: "Regular" },
        { label: "Fit", value: "Regular" },
        { label: "Product Length", value: "200 m" },
        { label: "Print Style", value: "Plain" },
        { label: "Sleeve Type", value: "Half Sleeve" },
        { label: "Neck Type", value: "Halter" },
        { label: "Hemline", value: "Straight" },
    ];

    return (
        <View className="m-4 p-4 border border-gray-200 rounded-lg bg-white">
            <Text className="text-lg mb-6 font-medium" style={{ fontFamily: fonts.rubikMedium }}>
                Product Details
            </Text>
            
            <View className="gap-y-4">
                {details.map((item, index) => (
                    <View key={index} className="flex-row items-flex-start">
                        <View className="w-1/2">
                            <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.rubikBold }}>
                                {item.label}
                            </Text>
                        </View>
                        <View className="w-1/2">
                            <Text className="text-black text-sm" style={{ fontFamily: fonts.rubikBold }}>
                                {item.value}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default ProductDetailsInfo;
