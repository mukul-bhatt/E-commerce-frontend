import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import CheckoutStepper from '../components/CheckoutStepper';
import DeliveryAddress from '../components/DeliveryAddress';
import OffersCarousel from '../components/OffersCarousel';
import CartItemCard, { CartItem } from '../components/CartItemCard';
import PriceDetails from '../components/PriceDetails';
import EmptyCart from '../components/EmptyCart';

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Blue Summer Dress floral',
    size: 'XL',
    rating: 4.8,
    reviewCount: 113,
    discountPercent: 15,
    price: 590,
    deliveryDate: '12 May',
    image: require('../../../assets/CardImages/card-image-1.jpg'),
    bankOffer: 'Get additional 10% discount with select kotak credit cards',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Silk top by Glam 21',
    size: 'M',
    rating: 4.8,
    reviewCount: 110,
    discountPercent: 15,
    price: 360,
    deliveryDate: '19 May',
    image: require('../../../assets/CardImages/card-image-2.png'),
    quantity: 1,
  },
];

export function CartScreen() {
  const itemCount = cartItems.length;

  if (itemCount === 0) {
    // Cart is empty 
    return <EmptyCart />
  }

  return (
    <View className="bg-white flex-1">
      <StatusBar style="dark" />

      {/* ── Scrollable body ── */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>

        {/* ── Step progress ── */}
        <CheckoutStepper currentStep={1} />

        <DeliveryAddress />

        <OffersCarousel />

        {/* Cart items */}
        <CartItems />

        {/* Price details */}
        <PriceDetails />

      </ScrollView>

      {/* ── Sticky bottom bar ── */}

      <BottomBar itemCount={itemCount} />

      <PlaceOrderButton />
    </View>
  );
}



const CartItems = () => {
  return (

    <View>
      {/* Cart section header */}
      <View className="bg-primary px-4 py-3 mt-3">
        <Text className="text-white text-sm font-bold">Cart</Text>
      </View>


      {/* Cart items */}
      <View>
        {cartItems.map((item, index) => (
          <View key={item.id}>
            <CartItemCard item={item} />
            {index < cartItems.length - 1 && (
              <View className="h-[1px] bg-cardStroke mx-4" />
            )}
          </View>
        ))}
      </View>
    </View>
  )
}


const BottomBar = ({ itemCount }: { itemCount: number }) => {
  return (
    <View className="bg-[#FFF5DC] py-1.5 items-center">
      <Text className="text-xs text-[#7A5C00] font-medium">
        {itemCount} item{itemCount !== 1 ? 's' : ''} in cart
      </Text>
    </View>
  );
}



const PlaceOrderButton = () => {
  return (
    <View className="px-4 py-3 bg-white">
      <Pressable className="bg-primary rounded-xl py-4 items-center">
        <Text className="text-white font-bold text-sm tracking-widest">
          PLACE ORDER
        </Text>
      </Pressable>
    </View>
  );
}

