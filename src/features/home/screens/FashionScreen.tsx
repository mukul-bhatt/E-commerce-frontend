import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
import MainCarousals from "../components/MainCarousals"
import FashionHeader from "../components/FashionHeader"
import ShopByCategoryBanner from "../components/ShopByCategoryBanner"
import { StatusBar } from "expo-status-bar"
import TopDealsOnFootWear from "../components/TopDealsOnFootWear"
import TopDiscountOnBrands from "../components/TopDiscountOnBrands"
import SummerEssentials from "../components/SummerEssential"
import BigDiscountsSection from "../components/BigDiscounts"
import BrandsInFocus from "../components/BrandsInFocus"

const FashionScreen = () => {
    return (
        <View className=" bg-white">
            <ScrollView showsVerticalScrollIndicator={false}>

                <StatusBar style="dark" />

                <View className="gap-4">


                    <View className="mx-4 gap-4">

                        <FashionHeader />
                        <MainCarousals />

                    </View>
                    <ShopByCategoryBanner />
                    <View className="mx-4 gap-4">

                        <TopDealsOnFootWear />
                        <TopDiscountOnBrands />

                    </View>

                    <SummerEssentials />

                    <View className="mx-4">

                        <BigDiscountsSection />

                    </View>

                    {/* Brands in Focus */}

                    <BrandsInFocus />

                </View>


            </ScrollView>
        </View>
    )
}

export default FashionScreen