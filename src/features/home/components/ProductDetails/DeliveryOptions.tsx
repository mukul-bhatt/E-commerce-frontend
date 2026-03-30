import { View, Text, Image } from "react-native";
import { fonts } from "../../../../theme/typography";
import { colors } from "../../../../theme/colors";

const DeliveryOptions = () => {
    const options = [
        { id: 1, label: "7 Day return", icon: require("../../../../../assets/deliveryIcons/cashOnDelivery.png")},
        { id: 2, label: "COD Available", icon: require("../../../../../assets/deliveryIcons/cashOnDelivery.png")},
        { id: 3, label: "Express Delivery", icon: require("../../../../../assets/deliveryIcons/cashOnDelivery.png")},
    ];

    return (
        <View className="flex-row justify-between px-4 py-4 gap-3">
            {options.map((option) => (
                <View 
                    key={option.id} 
                    className="flex-1 items-center justify-center py-4 rounded-xl border bg-white shadow-sm"
                    style={{ borderColor: colors.primary + '30' }}
                >
                    <View className="bg-primary/10 p-2 rounded-full mb-2" style={{ backgroundColor: colors.primary + '15' }}>
                        <Image className="w-6 h-6" source={option.icon} />
                    </View>
                    <Text 
                        className="text-[10px] text-center px-1" 
                        style={{ fontFamily: fonts.rubikBold, color: '#333' }}
                    >
                        {option.label}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default DeliveryOptions;
