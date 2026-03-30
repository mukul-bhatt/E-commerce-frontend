import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';

const offers = [
  {
    id: 1,
    icon: 'credit-card-outline',
    iconColor: '#E53935',
    title: 'Upto ₹400 Cashback',
    subtitle: 'On HDFC Bank credit card EMI on min spend of ₹3000 and above',
  },
  {
    id: 2,
    icon: 'bank-outline',
    iconColor: '#1565C0',
    title: 'Flat ₹200 Off',
    subtitle: 'On SBI debit card transactions above ₹1500',
  },
  {
    id: 3,
    icon: 'tag-outline',
    iconColor: '#2E7D32',
    title: '10% Instant Discount',
    subtitle: 'On Axis Bank credit & debit cards on min order of ₹2000',
  },
  {
    id: 4,
    icon: 'wallet-outline',
    iconColor: '#6A1B9A',
    title: 'Earn 5X Rewards',
    subtitle: 'On ICICI Bank co-branded credit cards on every purchase',
  },
  {
    id: 5,
    icon: 'gift-outline',
    iconColor: '#F57C00',
    title: 'Get ₹150 Cashback',
    subtitle: 'On Paytm Wallet payments on orders above ₹999',
  },
];

interface OffersCarouselProps {
  onCheckOffers?: () => void;
}

const OffersCarousel = ({ onCheckOffers }: OffersCarouselProps) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [containerWidth, setContainerWidth] = React.useState(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View
      className="mx-4 mt-2 rounded-xl border border-cardStroke bg-white overflow-hidden"
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      {/* Header row */}
      <View className="flex-row justify-end px-4 pt-3 pb-2">
        <Pressable onPress={onCheckOffers}>
          <Text className="text-xs font-medium text-primary">
            Check {offers.length * 2} other offers
          </Text>
        </Pressable>
      </View>

      {/* Carousel */}
      {containerWidth > 0 && (
        <Carousel
          ref={ref}
          style={{ width: containerWidth }}
          width={containerWidth}
          height={80}
          data={offers}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <View className="px-3">
              <View className="flex-row items-center px-4 py-3 rounded-xl border border-cardStroke bg-white gap-3">
                {/* Icon */}
                <View className="h-10 w-10 rounded-lg border-2 border-cardStroke items-center justify-center">
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={22}
                    color={item.iconColor}
                  />
                </View>

                {/* Text */}
                <View className="flex-1">
                  <Text className="text-sm font-bold text-black mb-0.5">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-[#6B6B6B] leading-4" numberOfLines={2}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {/* Pagination dots */}
      <Pagination.Basic
        progress={progress}
        data={offers}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: colors.defaultGray,
        }}
        activeDotStyle={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: colors.primary,
        }}
        containerStyle={{ gap: 6, marginTop: 4, marginBottom: 12 }}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default OffersCarousel;
