import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./BottomTabNavigator";
import FashionScreen from "../features/home/screens/FashionScreen";
import WomensFashionScreen from "../features/home/screens/WomensFashionScreen";
import { fontFamily } from "../theme/typography";
import SortModal from "../features/home/components/Modals/SortModal";
import FilterModal from "../features/home/components/Modals/FilterModal";
import ProductDetailsScreen from "../features/home/screens/ProductDetailsScreen";
import AddressModal from "../features/home/components/AddressModal";
import ReviewProduct from "../features/home/components/ProductDetails/Review";
import OrderDetailsScreen from "../features/Orders/screens/OrderDetailsScreen";
import ReturnExchangeScreen from "../features/Orders/screens/ReturnExchangeScreen";
import { AddressScreen } from "../features/checkout/screens/AddressScreen";
import { PaymentScreen } from "../features/checkout/screens/PaymentScreen";
import { OrderSuccessScreen } from "../features/checkout/screens/OrderSuccessScreen";
import { AddAddressScreen } from "../features/checkout/screens/AddAddressScreen";
import { EditProfileScreen } from "../features/Accounts/screens/EditProfileScreen";
import WishlistScreen from "../features/Accounts/screens/WishlistScreen";





export const RootStack = createNativeStackNavigator({
  initialRouteName: 'MainTabs',
  // initialRouteName: 'LoginMethod',
  screenOptions: {
     headerStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: fontFamily.rubikMedium,
          fontWeight: 'bold'
        },
  },
  screens: {
    MainTabs: {
      screen: MainTabs,
      options: {
         headerShown: false,
      },
    },
    Fashion: {
      screen: FashionScreen,
    },
    WomensFashion: {
      screen: WomensFashionScreen,
      options: {
        headerTitle: "Women's Fashion",
      }
    },
    SortModal: {
      screen: SortModal,
      options: {
        presentation: 'formSheet',
        headerShown: false,
        sheetAllowedDetents: 'fitToContents',
      },
    },
    FilterModal: {
      screen: FilterModal,
      options: {
        presentation: 'formSheet',
        headerShown: false,
        sheetAllowedDetents: 'fitToContents',
      },
    },
    ProductDetails: {
      screen: ProductDetailsScreen,
      options: {
        headerTitle: "Product Details",
      }
    },
    AddressModal: {
      screen: AddressModal,
      options: {
        presentation: 'transparentModal',
        headerShown: false,
        animation: 'slide_from_bottom',
      }
    },
    ReviewProduct: {
      screen: ReviewProduct,
      options: {
        headerTitle: "Review Product",
      }
    },
    OrderDetails: {
      screen: OrderDetailsScreen,
      options: {
        headerShown: true,
        headerTitle: "Order Details",
      }
    },
    ReturnExchange: {
      screen: ReturnExchangeScreen,
      options: {
        headerShown: true,
        headerTitle: "Return/Exchange",
      }
    },
    Address: {
      screen: AddressScreen,
      options: {
        headerShown: true,
        headerTitle: "Address",
      }
    },
    Payment: {
      screen: PaymentScreen,
      options: {
        headerShown: true,
        headerTitle: "Payment",
      }
    },
    OrderSuccess: {
      screen: OrderSuccessScreen,
      options: {
        headerShown: false,
      }
    },
    AddAddress: {
      screen: AddAddressScreen,
      options: {
        headerShown: true,
        headerTitle: "Add Address",
      }
    },
    EditProfile: {
      screen: EditProfileScreen,
      options: {
        headerShown: true,
        headerTitle: "Edit Profile",
      }
    },
    Wishlist: {
      screen: WishlistScreen,
      options: {
        headerShown: true,
        headerTitle: "My Wishlist",
      }
    }




  },
});