import { View, Image } from "react-native"

const ImageBannerCard = () => {
    return (
        <View>
            <Image source={require("../../../assets/imgBanner/imgBanner.png")} className="w-full h-36" resizeMode="contain" />
        </View>
    )
}

export default ImageBannerCard