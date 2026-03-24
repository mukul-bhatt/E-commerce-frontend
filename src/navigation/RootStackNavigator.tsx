import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./BottomTabNavigator";
import FashionScreen from "../features/home/screens/FashionScreen";
import WomensFashionScreen from "../features/home/screens/WomensFashionScreen";
import { fontFamily } from "../theme/typography";
import SortModal from "../features/home/components/Modals/SortModal";
import FilterModal from "../features/home/components/Modals/FilterModal";
import ProductDetailsScreen from "../features/home/screens/ProductDetailsScreen";
import AddressModal from "../features/home/components/AddressModal";

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'MainTabs',
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
    }
  },
});