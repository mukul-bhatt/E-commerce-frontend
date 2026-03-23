import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { fonts } from "../../../theme/typography";
import { AntDesign } from '@expo/vector-icons';
import {colors} from "../../../theme/colors";

const ProductDetailsScreen = () => {
    return (
        <ScrollView className="flex-1 bg-white">
            
            {/* Header Section */}
            <HeaderSection />

            {/* Image Section */}
            <View>
                <Image className="w-full h-[350px]" resizeMode="cover" source={{ uri: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' }} /> 
            </View>

            {/* Color selection section */}
             <ColorScheme />

            {/* Ratings and Price section */}
            <RatingsAndPrice />

            {/* Size selection section */}
            <SizeSection />

            {/* Delivery address section */}
           <DeliveryAddress />
           
           {/* Delivery Options */}
           <DeliveryOptions />

           {/* Product Details Section */}
           <ProductDetails />

           {/* Seller Details */}
           <SellerDetails />

           {/* Ratings and Review Section */}
           <RatingsAndReview />

           {/* Photos By Customer */}
           <View className="p-4 border-b border-gray-100">
            <Text className="text-lg font-bold" style={{ fontFamily: fonts.rubikBold }}>
                Photos by Customer
            </Text>

            <View className="flex-row mt-3 space-x-3 gap-2">
                {[1, 2, 3].map((i) => (
                    <TouchableOpacity key={i} className="border-2 border-green-600 rounded-lg p-0.5">
                        <Image 
                            className="w-16 h-16 rounded-md" 
                            source={{ uri: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' }} 
                        />
                    </TouchableOpacity>
                ))}
            </View>
           </View>
        </ScrollView>
    )
}

export default ProductDetailsScreen;




const ColorScheme = () => {
    return (
 <View className="px-4 py-2 border-b border-gray-100">
                <Text className="text-base" style={{ fontFamily: fonts.rubik }}>
                    Colour: <Text style={{ fontFamily: fonts.rubikBold }}>Green</Text>
                </Text>
                <View className="flex-row mt-3 space-x-3 gap-2">
                    {[1, 2, 3].map((i) => (
                        <TouchableOpacity key={i} className="border-2 border-green-600 rounded-lg p-0.5">
                            <Image 
                                className="w-16 h-16 rounded-md" 
                                source={{ uri: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' }} 
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View> 

    )
}



const RatingsAndPrice = () => {
    return (
        <View className="p-4 border-b border-gray-100">
                <View className="flex-row items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <AntDesign key={i} name="star" size={16} color={colors.discountOnBrands.green} />
                    ))}
                    <Text className="ml-2 text-blue-500" style={{ fontFamily: fonts.rubik }}>4.7</Text>
                    <Text className="text-gray-400" style={{ fontFamily: fonts.rubik }}> 324 reviews</Text>
                </View>

                <View className="flex-row items-center mt-3 gap-3">
                    <Text className="text-2xl" style={{ fontFamily: fonts.rubikBold }}>₹1899</Text>
                    <Text className="text-gray-400 line-through" style={{ fontFamily: fonts.rubik }}>₹2899</Text>
                    <View className="bg-discountOnBrands-green px-2 py-1 rounded">
                        <Text className="text-white text-xs" style={{ fontFamily: fonts.rubikBold }}>Save 54%</Text>
                    </View>
                </View>
            </View>
    )
}


const SizeSection = () => {
    return (
       <View className="p-4 border-b border-gray-100">
                <Text className="text-base mb-3" style={{ fontFamily: fonts.rubikBold }}>Size</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                    {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                        <TouchableOpacity key={size} className="border border-gray-300 w-12 h-12 items-center justify-center mr-3 bg-white">
                            <Text className="text-base" style={{ fontFamily: fonts.rubik }}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
    )
}


const DeliveryAddress = () => {
    return (
         <View className="p-4 border-b border-gray-100">
                <Text className="text-base mb-3" style={{ fontFamily: fonts.rubikBold }}>Deliver to</Text>
                <View className="flex-row items-center justify-between border border-gray-200 p-4 rounded-md">
                    <View className="flex-1">
                        <TextInput className="text-sm text-gray-800" style={{ fontFamily: fonts.rubik }}>537first floor Ghazibad</TextInput>
                    </View>
                    <TouchableOpacity>
                        <Text className="text-purple-700 text-sm" style={{ fontFamily: fonts.rubikBold }}>CHANGE</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const HeaderSection = () => {
    return (
        <View className="p-4 bg-product-headerBackground">
                <Text className="font-bold" style={{ fontFamily: fonts.rubikBold }}>Forever 18</Text>
                <Text className="font-extralight text-sm text-gray-800" style={{ fontFamily: fonts.rubik }}>Party wear women bottle green silk dress sleeveless</Text>
            </View>

    )
}

const DeliveryOptions = () => {
    const options = [
        { id: 1, label: "7 Day return", icon: require("../../../../assets/deliveryIcons/cashOnDelivery.png")},
        { id: 2, label: "COD Available", icon: require("../../../../assets/deliveryIcons/cashOnDelivery.png")},
        { id: 3, label: "Express Delivery", icon: require("../../../../assets/deliveryIcons/cashOnDelivery.png")},
    ];

    return (
        <View className="flex-row justify-between px-4 py-4 gap-3">
            {options.map((option) => (
                <View 
                    key={option.id} 
                    className="flex-1 items-center justify-center py-4 rounded-xl border bg-white shadow-sm"
                    style={{ borderColor: colors.primary + '30' }}
                >
                    <View className="bg-primary/10 p-2 rounded-full mb-2" style={{ backgroundColor: colors.primary + '15' }}>
                        <Image className="w-6 h-6" source={option.icon} />
                    </View>
                    <Text 
                        className="text-[10px] text-center px-1" 
                        style={{ fontFamily: fonts.rubikBold, color: '#333' }}
                    >
                        {option.label}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const ProductDetails = () => {
    const details = [
        { label: "Style Number", value: "S675" },
        { label: "Occasion", value: "Casual Power" },
        { label: "Top and Dress style", value: "Regular" },
        { label: "Fit", value: "Regular" },
        { label: "Product Length", value: "200 m" },
        { label: "Print Style", value: "Plain" },
        { label: "Sleeve Type", value: "Half Sleeve" },
        { label: "Neck Type", value: "Halter" },
        { label: "Hemline", value: "Straight" },
    ];

    return (
        <View className="m-4 p-4 border border-gray-200 rounded-lg bg-white">
            <Text className="text-lg mb-6 font-medium" style={{ fontFamily: fonts.rubikMedium }}>
                Product Details
            </Text>
            
            <View className="gap-y-4">
                {details.map((item, index) => (
                    <View key={index} className="flex-row items-flex-start">
                        <View className="w-1/2">
                            <Text className="text-gray-500 text-sm" style={{ fontFamily: fonts.rubikBold }}>
                                {item.label}
                            </Text>
                        </View>
                        <View className="w-1/2">
                            <Text className="text-black text-sm" style={{ fontFamily: fonts.rubikBold }}>
                                {item.value}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const SellerDetails = () => {
    return (
        <View className="p-4 border-b border-gray-100">
            <Text className="text-lg mb-4 font-bold" style={{ fontFamily: fonts.rubikBold }}>
                Seller details
            </Text>
            
            <Text 
                className="text-gray-600 text-base mb-1" 
                style={{ fontFamily: fonts.rubikBold }}
            >
                Mohak creations
            </Text>
            
            <Text 
                className="text-gray-500 text-sm leading-5" 
                style={{ fontFamily: fonts.rubik }}
            >
                Lifestyle INt PVT LTD , 79 degree town centre Building no 6 , North wing , off HAI airport road , yyamlu , bangalore 547809
            </Text>
        </View>
    );
}


const RatingsAndReview = () => {
    return (
        <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold" style={{ fontFamily: fonts.rubikBold }}>
                    Ratings & Reviews
                </Text>
                <TouchableOpacity 
                    className="bg-primary px-4 py-2 rounded-lg"
                >
                    <Text className="text-white text-sm font-bold" style={{ fontFamily: fonts.rubikMedium }}>
                        Rate Product
                    </Text>
                </TouchableOpacity>
            </View>


            <View>
                <TouchableOpacity className="flex-row items-center gap-2 bg-discountOnBrands-green w-20 h-10 rounded-lg justify-center">
                    <Text className="text-lg text-white font-extrabold" style={{ fontFamily: fonts.rubikBold }}>
                        4.8 
                    </Text>
                    <AntDesign name="star" size={20} color={"white"} />
                </TouchableOpacity>
            </View>


            <View>
                <Text className="text-md font-bold pt-2" style={{ fontFamily: fonts.rubikBold }}>
                    What customers say about this product
                </Text>

                <View className="mt-4 gap-y-3">
                    {[
                        { label: "Size/Fit of the product", rating: 5 },
                        { label: "Colour", rating: 4 },
                        { label: "Fabric", rating: 3 },
                        { label: "Style", rating: 5 },
                    ].map((item, index) => (
                        <View key={index} className="flex-row items-center justify-between">
                            <Text className="text-base text-black" style={{ fontFamily: fonts.rubik }}>
                                {item.label}
                            </Text>
                            <View className="flex-row gap-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <AntDesign 
                                        key={star} 
                                        name="star" 
                                        size={22} 
                                        color={star <= item.rating ? colors.discountOnBrands.green : "#E0E0E0"} 
                                    />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}


