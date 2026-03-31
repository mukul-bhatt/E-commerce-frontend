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
import { SavedAddressesScreen } from "../features/checkout/screens/SavedAddressesScreen";
import { EditAddressScreen } from "../features/checkout/screens/EditAddressScreen";
import { RatingsReviewsScreen } from "../features/Accounts/screens/RatingsReviewsScreen";
import { EditReviewScreen } from "../features/Accounts/screens/EditReviewScreen";
import { TermsOfUseScreen } from "../features/Accounts/screens/TermsOfUseScreen";
import { PrivacyPolicyScreen } from "../features/Accounts/screens/PrivacyPolicyScreen";
import { ContactSupportScreen } from "../features/Accounts/screens/ContactSupportScreen";
import { CouponsScreen } from "../features/Accounts/screens/CouponsScreen";
import { SavedPaymentsScreen } from "../features/Accounts/screens/SavedPaymentsScreen";
import { NotificationSettingsScreen } from "../features/Accounts/screens/NotificationSettingsScreen";
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
    SavedAddresses: {
      screen: SavedAddressesScreen,
      options: {
        headerShown: true,
        headerTitle: "Saved addresses",
      }
    },
    EditAddress: {
      screen: EditAddressScreen,
      options: {
        headerShown: true,
        headerTitle: "Edit Address",
      }
    },
    Wishlist: {
      screen: WishlistScreen,
      options: {
        headerShown: true,
        headerTitle: "My Wishlist",
      }
    },
    RatingsReviews: {
      screen: RatingsReviewsScreen,
      options: {
        headerShown: true,
        headerTitle: "Ratings and reviews",
      }
    },
    EditReview: {
      screen: EditReviewScreen,
      options: {
        headerShown: true,
        headerTitle: "Edit Review",
      }
    },
    TermsOfUse: {
      screen: TermsOfUseScreen,
      options: {
        headerShown: true,
        headerTitle: "Terms of Use",
      }
    },
    PrivacyPolicy: {
      screen: PrivacyPolicyScreen,
      options: {
        headerShown: true,
        headerTitle: "Privacy policy",
      }
    },
    ContactSupport: {
      screen: ContactSupportScreen,
      options: {
        headerShown: true,
        headerTitle: "Contact Support",
        headerStyle: {
          backgroundColor: '#5E4E91', // primary color for support header
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
        }
      }
    },
    Coupons: {
      screen: CouponsScreen,
      options: {
        headerShown: true,
        headerTitle: "Coupons",
      }
    },
    SavedPayments: {
      screen: SavedPaymentsScreen,
      options: {
        headerShown: true,
        headerTitle: "Saved Payment Methods",
      }
    },
    NotificationSettings: {
      screen: NotificationSettingsScreen,
      options: {
        headerShown: true,
        headerTitle: "Notifications",
      }
    }












  },
});