import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../features/auth/screens/LoginScreen"
import RegisterScreen from "../features/auth/screens/RegisterScreen"    
import LoginMethod from "../features/auth/screens/LoginMethod"

const AuthStack = createNativeStackNavigator({
    // initialRouteName: 'Register',
    initialRouteName: 'Login',
    // initialRouteName: 'LoginMethod',
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Register: {
             screen: RegisterScreen,
             options: {
               headerTitle: "Register",
             }
           },
        Login: {
             screen: LoginScreen,
             options: {
               headerTitle: "Login",
             }
           },
        LoginMethod: {
            screen: LoginMethod,
            options: {
                headerShown: false,
            }
        }
    },
})

export default AuthStack

// TODO: 
// fetch vs axios
// redux setup for state management - thunk middleware
// Robust error management for api calls
// auth token storage