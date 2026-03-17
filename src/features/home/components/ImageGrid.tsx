import { View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { textShadow } from "../../../theme/shadow";
import { fonts } from "../../../theme/typography";

interface CategoryCardProps {
  title: string;
  discount: string;
  image: any;
}

const CategoryCard = ({ title, discount, image }: CategoryCardProps) => (
  <TouchableOpacity className="flex-1 h-[150px] rounded-lg overflow-hidden">
    <ImageBackground
      source={image}
      className="flex-1 justify-end p-2"
      resizeMode="cover"
    >
      {/* Subtle overlay for text legibility */}
      <View className="absolute inset-0 bg-black/10" />
      
      <View className="items-center">
        <Text 
          className="text-white text-xl" 
          style={[textShadow.soft, { fontFamily: fonts.girassol }]}
        >
          {title}
        </Text>
        <Text className="text-white" style={{ fontFamily: fonts.gidugu }}>
          {discount}
        </Text>
        
        <View className="bg-white/90 px-3 py-1 rounded-full flex-row items-center">
          <Text className="text-xs mr-1" style={{ fontFamily: fonts.cormorantGaramond }}>Shop Now</Text>
          <MaterialCommunityIcons name="arrow-right" size={8} color="black" />
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const ImageGrid = () => {
  const categories = [
    { title: "DRESSES", discount: "20-50% Off", image: require("../../../assets/CardImages/card-image-1.jpg") },
    { title: "MAKEUP", discount: "20-50% Off", image: require("../../../assets/CardImages/card-image-2.png") },
    { title: "EYEWEAR", discount: "20-50% Off", image: require("../../../assets/CardImages/card-image-3.png") },
    { title: "SKINCARE", discount: "20-50% Off", image: require("../../../assets/CardImages/card-image-4.png") },
    { title: "APPLIANCES", discount: "20-50% Off", image: require("../../../assets/CardImages/card-image-5.png") },
    { title: "SNEAKERS", discount: "20-50% Off", image: require("../../../assets/CardImages/card-image-6.png") },
  ];

  const renderRow = (startIndex: number) => (
    <View className="flex-row gap-2 mb-2">
      {categories.slice(startIndex, startIndex + 3).map((cat, idx) => (
        <CategoryCard
          key={idx}
          title={cat.title}
          discount={cat.discount}
          image={cat.image}
        />
      ))}
    </View>
  );

  return (
    <View className="mt-4">
      {renderRow(0)}
      {renderRow(3)}
    </View>
  );
};

export default ImageGrid;