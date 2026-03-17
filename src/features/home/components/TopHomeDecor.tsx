import { View, Text } from "react-native"
import HeadingWithRightArrowIcon from "./HeadingWithRightArrowIcon"
import {data, HorizontalScrollListForSuggestedForYouItems} from "./SuggestedForYou"

const TopHomeDecor = () => {
    return (
        <View>
            <HeadingWithRightArrowIcon title="Top Home Decor Products | up to 25% off" />
            <HorizontalScrollListForSuggestedForYouItems />
        </View>
    )
}

export default TopHomeDecor