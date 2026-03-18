import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
import MainCarousals from "../components/MainCarousals"
import FashionHeader from "../components/FashionHeader"

const FashionScreen = () => {
    return (
        <SafeAreaView className="bg-blue-200">
            <ScrollView>
                <View className="mx-4 gap-4">

                    <FashionHeader />
                    <MainCarousals />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FashionScreen