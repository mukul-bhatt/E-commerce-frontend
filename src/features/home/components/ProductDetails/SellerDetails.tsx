import { View, Text } from "react-native";
import { fonts } from "../../../../theme/typography";

const SellerDetails = () => {
    return (
        <View className="p-4 border-b border-gray-100">
            <Text className="text-lg mb-4 font-bold" style={{ fontFamily: fonts.rubikBold }}>
                Seller details
            </Text>
            
            <Text 
                className="text-gray-600 text-base mb-1" 
                style={{ fontFamily: fonts.rubikBold }}
            >
                Mohak creations
            </Text>
            
            <Text 
                className="text-gray-500 text-sm leading-5" 
                style={{ fontFamily: fonts.rubik }}
            >
                Lifestyle INt PVT LTD , 79 degree town centre Building no 6 , North wing , off HAI airport road , yyamlu , bangalore 547809
            </Text>
        </View>
    );
}

export default SellerDetails;
