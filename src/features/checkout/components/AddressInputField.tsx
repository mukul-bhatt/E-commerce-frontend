import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { colors } from '../../../theme/colors';

interface AddressInputFieldProps extends TextInputProps {
  label: string;
}

const AddressInputField = ({ label, ...props }: AddressInputFieldProps) => {
  return (
    <View className="mb-4 bg-white p-4 rounded-xl border border-defaultGray shadow-sm">
      <Text className="text-xs text-gray-900 mb-2 font-medium">{label}</Text>
      <TextInput
        {...props}
        className="text-md text-gray-900 font-semibold p-0"
        placeholderTextColor={colors.defaultGray}
      />
    </View>
  );
};

export default AddressInputField;
