import * as React from "react";
import { Dimensions, View, Image, Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { colors } from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";

const data = [
  require("../../../assets/Carousals/Rectangle1.png"),
  require("../../../assets/Carousals/Rectangle2.png"),
  require("../../../assets/Carousals/Rectangle3.png"),
  require("../../../assets/Carousals/Rectangle4.png"),
  require("../../../assets/Carousals/Rectangle5.png"),
  require("../../../assets/Carousals/Rectangle6.png"),
];

const width = Dimensions.get("window").width;
 
function MainCarousals() {
  const navigation = useNavigation();
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [carouselWidth, setCarouselWidth] = React.useState(0);
  
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <Pressable onPress={() => navigation.navigate('Fashion')}>
    <View 
      onLayout={(event) => {
        setCarouselWidth(event.nativeEvent.layout.width);
      }}
    >
      {carouselWidth > 0 && (
        <Carousel
          ref={ref}
          style={{ width: carouselWidth, height: carouselWidth / 2 }}
          width={carouselWidth}
          height={carouselWidth / 2}
          data={data}
          onProgressChange={progress}
          renderItem={({ index }) => (
            <Image
              source={data[index]}
              style={{ width: carouselWidth, height: carouselWidth / 2, borderRadius: 10 }}
              resizeMode="cover"
            />
          )}
        />
      )}
 
      <View style={{ marginTop: 10 }}>
        <Pagination.Basic
          progress={progress}
          data={data}
          dotStyle={{
					width: 25,
					height: 4,
					backgroundColor: colors.defaultGray,
				}}
          containerStyle={{ gap: 10 }}
          onPress={onPressPagination}
        />
      </View>
    </View>
    </Pressable>
  );
}
 
export default MainCarousals;