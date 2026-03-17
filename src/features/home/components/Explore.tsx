import { View, Text } from "react-native";
import HeadingWithRightArrowIcon from "./HeadingWithRightArrowIcon";
import {data, HorizontalScrollListForSuggestedForYouItems} from "./SuggestedForYou"

const Explore = () => {
    return (
        <View>
            <HeadingWithRightArrowIcon title="Explore Where you Left" />
            <HorizontalScrollListForSuggestedForYouItems />
        </View>
    )
}

export default Explore;