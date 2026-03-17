import { View, Image, Text, ImageBackground, TouchableOpacity } from "react-native";
import { textShadow } from "../../../theme/shadow";
import { MaterialIcons } from "@expo/vector-icons";
import { fonts } from "../../../theme/typography";

const SpecialAdBanner = () => {
    return (
        <View className="flex-row h-[280px] gap-3">
            {/* Main Banner (Left) */}
            <View className="w-[55%]">
                <ImageBackground 
                    source={require("../../../assets/AdBannerImages/adBannerMain.jpg")} 
                    className="flex-1 rounded-3xl overflow-hidden"
                    resizeMode="cover"
                >
                    <View className="flex-1 justify-end items-center px-4 pb-4">
                        <Text 
                            className="text-white text-4xl text-center leading-tight uppercase"
                            style={[textShadow.soft, { fontFamily: fonts.girassol }]}
                        >
                            Fashion For Men
                        </Text>
                        <Text 
                            className="text-white text-lg font-bold mt-1"
                            style={textShadow.soft}
                        >
                            Up to 60% Off
                        </Text>
                        
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            className="mt-6 bg-white/30 border border-white/20 w-32 h-10 rounded-full overflow-hidden blur-md items-center justify-center"
                        >
                            {/* Inner translucent effect */}
                            <View className="flex-row items-center justify-center gap-2">
                                <Text className="text-lg" style={{ fontFamily: fonts.cormorantGaramond }}>SALE 60</Text>
                                <MaterialIcons name="content-copy" size={16} color="black" />
                            </View>
                            <View className="absolute inset-0 bg-white/10" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            {/* Secondary Banners (Right) */}
            <View className="flex-1 gap-3">
                {/* Top Right Card */}
                <View className="flex-1 rounded-2xl overflow-hidden bg-[#001D3D]">
                    <Image 
                        source={require("../../../assets/AdBannerImages/adBannerSide.jpg")} 
                        className="flex-1 w-full" 
                        resizeMode="cover" 
                    />
                    <View className="py-2.5 items-center">
                        <Text className="text-white text-[13px]" style={{ fontFamily: fonts.cormorantGaramond }}>
                            Everything Under ₹499
                        </Text>
                    </View>
                </View>

                {/* Bottom Right Card */}
                <View className="flex-1 rounded-2xl overflow-hidden bg-[#001D3D]">
                    <Image 
                        source={require("../../../assets/AdBannerImages/adBannerSide.jpg")} 
                        className="flex-1 w-full" 
                        resizeMode="cover" 
                    />
                    <View className="py-2.5 items-center">
                        <Text className="text-white text-[13px]" style={{ fontFamily: fonts.cormorantGaramond }}>
                            Everything Under ₹499
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SpecialAdBanner;