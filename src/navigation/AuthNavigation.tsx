import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../features/auth/screens/LoginScreen"
import RegisterScreen from "../features/auth/screens/RegisterScreen"


const AuthStack = createNativeStackNavigator({
    initialRouteName: 'Login',
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
           }
    },
})

export default AuthStack