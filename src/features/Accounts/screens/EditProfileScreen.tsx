import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Platform, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileInputField from '../components/ProfileInputField';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import GenderDropdown from '../components/GenderDropdown';

export function EditProfileScreen() {
  const navigation = useNavigation();
  
  const [gender, setGender] = useState('Female');
  const [dob, setDob] = useState(new Date(2006, 6, 12)); // 12 JULY 2006
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === 'ios');
    setDob(currentDate);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 32, paddingBottom: 100 }}
      >
        {/* Large Avatar */}
        <View className="items-center mb-8">
          <View className="h-28 w-28 rounded-full bg-[#1AA100] items-center justify-center shadow-lg">
            <Text className="text-white text-4xl font-bold">SG</Text>
          </View>
        </View>

        <ProfileInputField 
          label="Name" 
          placeholder="Shreya Gupta"
        />
        
        <ProfileInputField 
          label="Email Address" 
          placeholder="gupta.shreya2006@gmail.com"
          keyboardType="email-address"
        />
        
        <ProfileInputField 
          label="Mobile Number" 
          placeholder="+91 5168830091"
          keyboardType="phone-pad"
        />
        
        <ProfileInputField 
          label="Alternate Mobile Number" 
          placeholder="+91 9898767656"
          keyboardType="phone-pad"
        />
        
        <TouchableOpacity onPress={() => setShowGenderDropdown(true)}>
          <View pointerEvents="none">
            <ProfileInputField 
              label="Gender" 
              value={gender}
              editable={false}
              rightIcon={<Feather name="chevron-down" size={20} color="#000" />}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <View pointerEvents="none">
            <ProfileInputField 
              label="Date of Birth" 
              value={formatDate(dob)}
              editable={false}
              rightIcon={<MaterialCommunityIcons name="calendar-month-outline" size={22} color="#000" />}
            />
          </View>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={dob}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <GenderDropdown 
          isVisible={showGenderDropdown}
          onClose={() => setShowGenderDropdown(false)}
          onSelect={(val) => setGender(val)}
          currentValue={gender}
        />

      </ScrollView>

      {/* Bottom Button */}
      <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-50 absolute bottom-0 w-full">
        <View className="px-4 py-4">
          <Pressable 
            className="bg-primary rounded-xl py-4 items-center shadow-lg"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold text-sm tracking-widest uppercase">
              SAVE CHANGES
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

