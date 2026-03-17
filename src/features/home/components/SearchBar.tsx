import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../theme/colors";

const SearchBar = () => {
  return (
    <View className="flex-row items-center border border-defaultGray rounded-lg overflow-hidden h-[45px] mx-4">
      
      {/* Left Search Button */}
      <TouchableOpacity className="bg-primary mx-sm justify-center items-center px-md h-[90%] rounded-lg">
        <Ionicons name="search" size={20} color="white" />
      </TouchableOpacity>

      {/* Input */}
      <TextInput
        placeholder="Search for 'books'"
        placeholderTextColor={colors.textInput.placeHolder}
        className="flex-1 px-sm text-base"
      />

      {/* Camera Button */}
      <TouchableOpacity className="px-md justify-center items-center">
        <Ionicons name="camera-outline" size={22} color={colors.icon.primary} />
      </TouchableOpacity>

    </View>
  );
};

export default SearchBar;