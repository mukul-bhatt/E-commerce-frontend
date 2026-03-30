import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { HomeScreen } from '../features/home/screens/HomeScreen';
import FashionScreen from '../features/home/screens/FashionScreen';
import { CartScreen } from '../features/cart/screens/CartScreen';
import MyOrders from '../features/Orders/screens/MyOrders';
import { AccountScreen } from '../features/Accounts/screens/AccountScreen';
import { CatalogScreen } from '../features/catalog/screens/CatalogScreen';
import { FontAwesome5, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { fontFamily } from '../theme/typography';

const MainTabs = createBottomTabNavigator({
  initialRouteName: 'Account',
  screenOptions: {
    headerShown: false,
    animation: 'fade',
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.icon.secondary,
    headerStyle: {
      backgroundColor: 'white',
      height: 70
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: fontFamily.rubikMedium,
      fontWeight: 'bold'
    },
    // tabBarStyle: {
    //   backgroundColor: '#020617',
    //   borderTopColor: '#1e293b',
    // },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
      },
    },
    Catalog: {
      screen: CatalogScreen,
      options: {
        title: 'Categories',
        tabBarIcon: ({ color }) => (
          <Feather name="grid" size={24} color={color} />
        ),
        headerShown: true,
      },
    },
    Orders: {
      screen: MyOrders,
      options: {
        title: 'Orders',
        tabBarIcon: ({ color }) => (
          <Feather name="package" size={24} color={color} />
        ),
        headerShown: true,
        headerTitle: 'ORDERS',
        headerTitleStyle: {
          fontFamily: fontFamily.rubikMedium,
          color: colors.primary,
          letterSpacing: 2,
        },
        headerStyles: {
          height: 80
        },
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Feather name="menu" size={24} color={colors.primary} />
          </TouchableOpacity>
        ),
      },
    },
    Cart: {
      screen: CartScreen,
      options: {
        title: 'Cart',
        headerTitle: "Shopping Cart",
        tabBarIcon: ({ color }) => (
          <AntDesign name="shopping-cart" size={24} color={color} />
        ),
        headerShown: true,
        
        // headerBackVisible: true,
//         headerLeft: () => (
//   <Ionicons name="arrow-back" color="black" size={24} />
// ),
      },
    },
    Account: {
      screen: AccountScreen,
      options: {
        title: 'Account',
        headerShown: true,
        headerTitle: 'My Account',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="user-circle" size={24} color={color} />
        ),
      },
    },

  },
});

export default MainTabs;
