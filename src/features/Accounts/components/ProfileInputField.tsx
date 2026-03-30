import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { colors } from '../../../theme/colors';

interface ProfileInputFieldProps extends TextInputProps {
  label: string;
  rightIcon?: React.ReactNode;
}

const ProfileInputField = ({ label, rightIcon, ...props }: ProfileInputFieldProps) => {
  return (
    <View className="mb-4 bg-white p-4 rounded-xl border border-gray-300 shadow-sm flex-row items-center">
      <View className="flex-1">
        <Text className="text-[10px] text-gray-400 mb-1.5 font-medium uppercase tracking-wider">{label}</Text>
        <TextInput
          {...props}
          className="text-md text-gray-900 font-semibold p-0"
          placeholderTextColor={colors.defaultGray}
        />
      </View>
      {rightIcon && (
        <View className="ml-2">
          {rightIcon}
        </View>
      )}
    </View>
  );
};

export default ProfileInputField;
