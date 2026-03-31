import { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import CheckoutStepper from '../components/CheckoutStepper';
import DeliveryAddress from '../components/DeliveryAddress';
import OffersCarousel from '../components/OffersCarousel';
import CartItemCard, { CartItem } from '../components/CartItemCard';
import PriceDetails from '../components/PriceDetails';
import EmptyCart from '../components/EmptyCart';
import RemoveItemModal from '../components/RemoveItemModal';

const INITIAL_CART_ITEMS: CartItem[] = [
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
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  const itemCount = cartItems.length;

  if (itemCount === 0) {
    // Cart is empty 
    return <EmptyCart />
  }

  const handleRemovePress = (id: string) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      setSelectedItem(item);
      setIsRemoveModalVisible(true);
    }
  };

  const confirmRemove = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    setIsRemoveModalVisible(false);
    setSelectedItem(null);
  };

  const handleQuantityChange = (id: string, qty: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const calculateBreakdown = () => {
    const totalMRP = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // Rough calculation for demo purposes
    const discount = Math.round(totalMRP * 0.15); 
    const couponDiscount = 20;
    const platformFees = 10;
    const deliveryCharge = 0;
    const totalAmount = totalMRP - discount - couponDiscount + platformFees + deliveryCharge;

    return {
      itemCount: cartItems.length,
      totalMRP,
      discount,
      couponDiscount,
      platformFees,
      deliveryCharge,
      freeDelivery: true,
      totalAmount,
    };
  };

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
        <CartItemsComponent 
          items={cartItems} 
          onDelete={handleRemovePress}
          onQuantityChange={handleQuantityChange}
        />

        {/* Price details */}
        <PriceDetails breakdown={calculateBreakdown()} />

      </ScrollView>

      {/* ── Sticky bottom bar ── */}

      <BottomBar itemCount={itemCount} />

      <PlaceOrderButton />

      {/* Removal Confirmation Modal */}
      <RemoveItemModal
        isVisible={isRemoveModalVisible}
        item={selectedItem}
        onClose={() => setIsRemoveModalVisible(false)}
        onRemove={confirmRemove}
        onMoveToWishlist={(id) => {
          // For now, moving to wishlist also removes from cart
          confirmRemove(id);
        }}
      />
    </View>
  );
}



const CartItemsComponent = ({ 
  items, 
  onDelete,
  onQuantityChange 
}: { 
  items: CartItem[], 
  onDelete: (id: string) => void,
  onQuantityChange: (id: string, qty: number) => void
}) => {
  return (

    <View>
      {/* Cart section header */}
      <View className="bg-primary px-4 py-3 mt-3">
        <Text className="text-white text-sm font-bold">Cart</Text>
      </View>


      {/* Cart items */}
      <View>
        {items.map((item, index) => (
          <View key={item.id}>
            <CartItemCard 
              item={item} 
              onDelete={onDelete}
              onQuantityChange={onQuantityChange}
            />
            {index < items.length - 1 && (
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
  const navigation = useNavigation<any>();
  return (
    // <SafeAreaView edges={['bottom']} className="bg-white">
      <View className="px-4 py-3 bg-white">
        <Pressable 
          className="bg-primary rounded-xl py-4 items-center"
          onPress={() => navigation.navigate('Address')}
        >
          <Text className="text-white font-bold text-sm tracking-widest">
            PLACE ORDER
          </Text>
        </Pressable>
      </View>
    // </SafeAreaView>
  );
}



