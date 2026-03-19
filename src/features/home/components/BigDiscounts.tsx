import {View, Text} from "react-native"
import HeadingWithRightArrowIcon from "./HeadingWithRightArrowIcon"
import { HorizontalScrollListForSuggestedForYouItems } from "./SuggestedForYou"

const BigDiscountsSection = () => {
    return (
        <View>
            <HeadingWithRightArrowIcon title="Big Discounts, only for you" />
            <HorizontalScrollListForSuggestedForYouItems />
        </View>
    )
}

export default BigDiscountsSection