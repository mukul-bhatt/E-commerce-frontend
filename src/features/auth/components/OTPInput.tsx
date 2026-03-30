import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { colors } from '../../../theme/colors';

interface OTPInputProps {
  length?: number;
  onOTPChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onOTPChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onOTPChange(newOtp.join(''));

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View className="flex-row justify-between items-center w-full px-4 gap-2">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) inputs.current[index] = ref;
          }}
          className={`w-12 h-14 border-2 rounded-xl text-center text-xl font-bold bg-gray-50 ${
            digit ? 'border-primary' : 'border-gray-200'
          }`}
          style={{ color: digit ? colors.primary : '#000' }}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

export default OTPInput;
