import { View, Image } from "react-native";

const ImageSection = () => {
    return (
        <View>
            <Image className="w-full h-[350px]" resizeMode="cover" source={{ uri: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' }} /> 
        </View>
    );
}

export default ImageSection;
