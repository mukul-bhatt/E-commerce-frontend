import { View, Text, TextInput, Pressable, ScrollView, Alert, ActivityIndicator } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"
import { fontFamily } from "../../../theme/typography"
import { Formik } from 'formik'
import * as Yup from 'yup'
import { registerUser } from "../services/authService"
import { RegisterRequest } from "../models/registerApiResponse"

// Validation schema
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function RegisterScreen() {
  const navigation = useNavigation();

  const handleRegister = async (values: any, { setSubmitting }: any) => {
    console.log('Register values:', values);
    try {
      const payloadForRegister: RegisterRequest = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.phoneNumber,
        password: values.password,
        device_type: "Android",
        device_name: "Samsung Galaxy S23",
        device_id: "device-uuid-001",
      }
      const response = await registerUser(payloadForRegister)
      Alert.alert("Success", "Account created successfully!")
      navigation.navigate('LoginScreen' as never)
    } catch (error: any) {
      console.log('Registration error:', error.message);
      Alert.alert("Registration Failed", error.message || "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={handleRegister}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ScrollView
          className="flex-1 bg-white"
          contentContainerStyle={{ padding: 20 }}
        >
          {/* Status Bar */}
          <StatusBar style='dark' />

          {/* header */}
          <Text className="text-2xl font-semibold mb-6">
            Create Account
          </Text>

          {/* name row */}
          <View className="flex-row gap-3 mb-4">
            <View className="flex-1">
              <TextInput
                placeholder="First name"
                placeholderTextColor="gray"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                className={`border rounded-xl px-4 py-3 text-black ${
                  errors.firstName && touched.firstName ? 'border-error' : 'border-gray-300'
                }`}
                style={{ fontFamily: fontFamily.rubikMedium }}
              />
              {errors.firstName && touched.firstName && (
                <Text className="text-error text-xs mt-1 ml-1">{errors.firstName}</Text>
              )}
            </View>

            <View className="flex-1">
              <TextInput
                placeholder="Last name"
                placeholderTextColor="gray"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                className={`border rounded-xl px-4 py-3 text-black ${
                  errors.lastName && touched.lastName ? 'border-error' : 'border-gray-300'
                }`}
                style={{ fontFamily: fontFamily.rubikMedium }}
              />
              {errors.lastName && touched.lastName && (
                <Text className="text-error text-xs mt-1 ml-1">{errors.lastName}</Text>
              )}
            </View>
          </View>

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
              style={{ fontFamily: fontFamily.rubikMedium }}
            />
            {errors.email && touched.email && (
              <Text className="text-error text-xs mt-1 ml-1">{errors.email}</Text>
            )}
          </View>

          {/* phone */}
          <View className="mb-4">
            <TextInput
              placeholder="Phone number"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              className={`border rounded-xl px-4 py-3 text-black ${
                errors.phoneNumber && touched.phoneNumber ? 'border-error' : 'border-gray-300'
              }`}
              style={{ fontFamily: fontFamily.rubikMedium }}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <Text className="text-error text-xs mt-1 ml-1">{errors.phoneNumber}</Text>
            )}
          </View>

          {/* password */}
          <View className="mb-4">
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              textContentType="oneTimeCode"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              className={`border rounded-xl px-4 py-3 text-black ${
                errors.password && touched.password ? 'border-error' : 'border-gray-300'
              }`}
              style={{ fontFamily: fontFamily.rubikMedium }}
            />
            {errors.password && touched.password && (
              <Text className="text-error text-xs mt-1 ml-1">{errors.password}</Text>
            )}
          </View>

          {/* confirm password */}
          <View className="mb-6">
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="gray"
              secureTextEntry
              textContentType="oneTimeCode"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              className={`border rounded-xl px-4 py-3 text-black ${
                errors.confirmPassword && touched.confirmPassword ? 'border-error' : 'border-gray-300'
              }`}
              style={{ fontFamily: fontFamily.rubikMedium }}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text className="text-error text-xs mt-1 ml-1">{errors.confirmPassword}</Text>
            )}
          </View>

          {/* register button */}
          <Pressable
            onPress={() => handleSubmit()}
            disabled={values.firstName === '' || values.lastName === '' || values.email === '' || values.phoneNumber === '' || values.password === '' || values.confirmPassword === '' || (values as any).isSubmitting}
            className={`py-4 rounded-2xl items-center ${
              (values.firstName === '' || values.lastName === '' || values.email === '' || values.phoneNumber === '' || values.password === '' || values.confirmPassword === '')
                ? 'bg-gray-300'
                : 'bg-primary'
            }`}
          >
            {(values as any).isSubmitting ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-semibold text-base">
                Create Account
              </Text>
            )}
          </Pressable>

          {/* login link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-500">
              Already have an account?
            </Text>
            <Pressable onPress={() => (navigation as any).navigate('LoginScreen')}>
              <Text className="ml-1 font-semibold">
                Login
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}