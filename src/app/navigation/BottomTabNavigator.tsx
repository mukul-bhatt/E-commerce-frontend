import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { CatalogScreen } from '../../features/catalog/screens/CatalogScreen';
import { CartScreen } from '../../features/cart/screens/CartScreen';
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';
import { AccountScreen } from '../../features/Accounts/screens/AccountScreen';
import { Ionicons, FontAwesome5, AntDesign, Feather, MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const MainTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    animation: 'fade',
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.icon.secondary,
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
      },
    },
    Cart: {
      screen: CartScreen,
      options: {
        title: 'Orders',
        tabBarIcon: ({ color }) => (
          <Feather name="package" size={24} color={color} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        title: 'Cart',
        tabBarIcon: ({ color }) => (
          <AntDesign name="shopping-cart" size={24} color={color} />
        ),
        },
    },
    Account: {
      screen: AccountScreen,
      options: {
        title: 'Account',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="user-circle" size={24} color={color} />
        ),
      },
    },
  },
});

export default MainTabs;
