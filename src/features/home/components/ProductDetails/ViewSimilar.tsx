import { View, Text } from "react-native";
import { fonts } from "../../../../theme/typography";
import { HorizontalScrollListForSuggestedForYouItems } from "../../components/SuggestedForYou";

const ViewSimilar = () => {
    return (
        <View className="px-4 py-2 mt-2">
            <Text className="text-lg font-bold" style={{ fontFamily: fonts.rubikBold }}>View Similar</Text>
            <HorizontalScrollListForSuggestedForYouItems />
        </View>
    );
}

export default ViewSimilar;
