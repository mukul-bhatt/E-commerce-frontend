import { View, Text, TextInput, Pressable, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Formik } from 'formik'
import * as Yup from 'yup'

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = (values: any) => {
    console.log('Login values:', values);
    // Add login logic here
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ScrollView
          className="flex-1 bg-white"
          contentContainerStyle={{ padding: 20 }}
        >
          {/* heading */}
          <Text className="text-2xl font-semibold mb-2">
            Welcome Back
          </Text>

          <Text className="text-gray-500 mb-6">
            Login to continue shopping
          </Text>

          {/* email */}
          <View className="mb-4">
            <TextInput
              placeholder="Email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              className={`border rounded-xl px-4 py-3 text-black ${
                errors.email && touched.email ? 'border-error' : 'border-gray-300'
              }`}
            />
            {errors.email && touched.email && (
              <Text className="text-error text-xs mt-1 ml-1">{errors.email}</Text>
            )}
          </View>

          {/* password */}
          <View className="mb-2">
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              className={`border rounded-xl px-4 py-3 text-black ${
                errors.password && touched.password ? 'border-error' : 'border-gray-300'
              }`}
            />
            {errors.password && touched.password && (
              <Text className="text-error text-xs mt-1 ml-1">{errors.password}</Text>
            )}
          </View>

          {/* forgot password */}
          <Pressable className="items-end mb-6">
            <Text className="text-sm font-medium">
              Forgot password?
            </Text>
          </Pressable>

          {/* login button */}
          <Pressable
            onPress={() => handleSubmit()}
            className="py-4 rounded-2xl items-center bg-primary"
          >
            <Text className="text-white font-semibold text-base">
              Login
            </Text>
          </Pressable>

          {/* divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="mx-3 text-gray-400">
              OR
            </Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* create account */}
          <View className="flex-row justify-center">
            <Text className="text-gray-500">
              Don't have an account?
            </Text>
            <Pressable onPress={() => (navigation as any).navigate('RegisterScreen')}>
              <Text className="ml-1 font-semibold">
                Create account
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}