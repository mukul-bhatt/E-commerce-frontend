import { Text, View } from "react-native"
import HeadingWithRightArrowIcon from "./HeadingWithRightArrowIcon"
import { HorizontalScrollListForSuggestedForYouItems } from "./SuggestedForYou"


const TopDealsOnFootWear = () => {
    return (
        <View>
            <HeadingWithRightArrowIcon title="Top Deals On FootWear" />
            <HorizontalScrollListForSuggestedForYouItems />
        </View>
    )
}

export default TopDealsOnFootWear