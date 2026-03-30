import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../../theme/typography';
import { colors } from '../../../theme/colors';
import OTPInput from '../components/OTPInput';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

type LoginFlowState = 'SELECTION' | 'VERIFICATION';
type LoginMethodType = 'EMAIL' | 'PHONE';

const LoginMethod = () => {
  const [flowState, setFlowState] = useState<LoginFlowState>('SELECTION');
  const [method, setMethod] = useState<LoginMethodType | null>(null);

  const handleMethodSelect = (selectedMethod: LoginMethodType) => {
    setMethod(selectedMethod);
    setFlowState('VERIFICATION');
  };

  const handleBack = () => {
    if (flowState === 'VERIFICATION') {
      setFlowState('SELECTION');
    } else {
      // Use navigation.goBack() if integrated with navigation
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style='dark' />
      <ScrollView 
        className="flex-1 px-6"
        contentContainerStyle={{ flexGrow: 1, paddingTop: 40 }}
      >
        {flowState === 'SELECTION' ? (
          <MethodSelectionView onSelect={handleMethodSelect} />
        ) : (
          <OTPVerificationView 
            method={method!} 
            onBack={handleBack} 
            onVerify={(otp) => console.log('Verifying OTP:', otp)} 
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginMethod;

/**
 * Component for choosing the login method (Email or Phone OTP)
 */
const MethodSelectionView = ({ onSelect }: { onSelect: (method: LoginMethodType) => void }) => {
  return (
    <View className="flex-1">
      <View className="mb-10">
        <Text className="text-3xl" style={{ fontFamily: fonts.rubikBold }}>
          Login Method
        </Text>
        <Text className="text-gray-500 mt-2 text-base" style={{ fontFamily: fonts.rubik }}>
          Choose how you would like to receive your one-time password (OTP).
        </Text>
      </View>

      <View className="gap-y-4">
        <Pressable
          onPress={() => onSelect('EMAIL')}
          className="flex-row items-center p-5 border-2 border-gray-100 rounded-2xl bg-gray-50 active:border-primary active:bg-primary/5"
        >
          <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mr-4">
            <MaterialIcons name="email" size={24} color="#3B82F6" />
          </View>
          <View className="flex-1">
            <Text className="text-lg" style={{ fontFamily: fonts.rubikBold }}>
              Email OTP
            </Text>
            <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.rubik }}>
              We'll send a code to your email
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
        </Pressable>

        <Pressable
          onPress={() => onSelect('PHONE')}
          className="flex-row items-center p-5 border-2 border-gray-100 rounded-2xl bg-gray-50 active:border-primary active:bg-primary/5"
        >
          <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center mr-4">
            <MaterialIcons name="phone-iphone" size={24} color="#10B981" />
          </View>
          <View className="flex-1">
            <Text className="text-lg" style={{ fontFamily: fonts.rubikBold }}>
              Phone OTP
            </Text>
            <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.rubik }}>
              We'll send a code via SMS
            </Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
        </Pressable>
      </View>

      <View className="mt-12 items-center">
        <Text className="text-gray-400 text-xs text-center" style={{ fontFamily: fonts.rubik }}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

/**
 * Component for entering the 6-digit OTP
 */
const OTPVerificationView = ({ 
  method, 
  onBack, 
  onVerify 
}: { 
  method: LoginMethodType; 
  onBack: () => void;
  onVerify: (otp: string) => void;
}) => {
  const [otpValue, setOtpValue] = useState('');

  return (
    <View className="flex-1">
      <Pressable onPress={onBack} className="mb-6 w-10 h-10 items-center justify-center rounded-full bg-gray-100">
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </Pressable>

      <View className="mb-10">
        <Text className="text-3xl" style={{ fontFamily: fonts.rubikBold }}>
          Verify OTP
        </Text>
        <Text className="text-gray-500 mt-2 text-base" style={{ fontFamily: fonts.rubik }}>
          We've sent a 6-digit code to your {method === 'EMAIL' ? 'email address' : 'phone number'}.
        </Text>
      </View>

      <View className="items-center justify-center mb-8">
        <OTPInput onOTPChange={setOtpValue} />
      </View>

      <Pressable
        onPress={() => onVerify(otpValue)}
        disabled={otpValue.length < 6}
        className={`py-4 rounded-2xl items-center ${otpValue.length === 6 ? 'bg-primary' : 'bg-gray-300'}`}
      >
        <Text className="text-white text-lg" style={{ fontFamily: fonts.rubikBold }}>
          Verify & Login
        </Text>
      </Pressable>

      <View className="mt-8 flex-row justify-center items-center">
        <Text className="text-gray-500" style={{ fontFamily: fonts.rubik }}>
          Didn't receive the code?{' '}
        </Text>
        <Pressable>
          <Text className="text-primary" style={{ fontFamily: fonts.rubikBold }}>
            Resend
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
