import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import MainCarousals from '../components/MainCarousals';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import ImageGrid from '../components/ImageGrid';
import ShopByCategory from '../components/ShopByCategory';
import { ScrollView } from 'react-native-gesture-handler';
import SuggestedForYou from '../components/SuggestedForYou';
import SpecialAdBanner from '../components/SpecialAdBanner';
import Explore from "../components/Explore"
import ShopByBrand from '../components/ShopByBrand';
import TopHomeDecor from '../components/TopHomeDecor';
import ImageBannerCard from '../components/ImageBannerCard';
import AddressModal from '../components/AddressModal';
import { useState } from 'react';


export function HomeScreen({location = "Delhi"}: {location: string}) {
  // Modal Visibility state
  const [visible, setVisible] = useState(false);

  return (
   <SafeAreaView edges={['top']}>
    <ScrollView showsVerticalScrollIndicator={false}>

    <View className='flex gap-4'>

    {/* Status Bar */}
    <StatusBar style='dark'/>

    {/* Search Bar */}
    <SearchBar />

    {/* Delivery Location */}
    <TouchableOpacity onPress={()=>setVisible(true)}> 
    <View className='px-4 bg-defaultGray py-2 flex-row items-center'>
      
      <Ionicons name="location-outline" size={16} color="black" />
      <Text>  Delivering to {location} </Text>
      <MaterialCommunityIcons name="greater-than" size={12} color="black" />
      
    </View>
    </TouchableOpacity>

    {/* A View to hold all the components and give them the same horizontal padding */}
    <View className='mx-4 flex gap-4'>
      {/* Carousal Cards */}
      <MainCarousals />    

      {/* Image grid */}
      <ImageGrid />

      {/* Shop by category section */}
      <ShopByCategory />

      {/* Suggested For You Section */}
      <SuggestedForYou />

      {/* Another Banner Component */}
      <SpecialAdBanner />

      {/* Explore Where you Left Section */}
      <Explore />

      {/* Get instant discounts on Premium Products */}
      {/* I NEED TO CREATE IT LATER- HAVE SOME QUESTIONS REGARDING VIEW ALL BUTTON */}

      </View>


      {/* Shop By Brand Section */}
      <ShopByBrand />

      <View className='mx-4'>

        {/* Top Home Decor Section */}
        <TopHomeDecor />

      </View>
      {/* Image Banner Card */}
      <ImageBannerCard />
        
      
      <AddressModal visible={visible} setVisible={setVisible}/>


     
      
   </View>


    </ScrollView>
    

   </SafeAreaView>
  );
}
