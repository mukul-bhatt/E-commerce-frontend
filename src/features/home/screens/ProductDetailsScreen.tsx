import { useState } from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

// Shared Components
import AddToCartModal from "../components/AddToCartModal";

// Product Details Specific Components
import HeaderSection from "../components/ProductDetails/HeaderSection";
import ImageSection from "../components/ProductDetails/ImageSection";
import ColorScheme from "../components/ProductDetails/ColorScheme";
import RatingsAndPrice from "../components/ProductDetails/RatingsAndPrice";
import SizeSection from "../components/ProductDetails/SizeSection";
import DeliveryAddress from "../components/ProductDetails/DeliveryAddress";
import DeliveryOptions from "../components/ProductDetails/DeliveryOptions";
import ProductDetailsInfo from "../components/ProductDetails/ProductDetailsInfo";
import SellerDetails from "../components/ProductDetails/SellerDetails";
import RatingsAndReview from "../components/ProductDetails/RatingsAndReview";
import PhotosByCustomer from "../components/ProductDetails/PhotosByCustomer";
import ViewSimilar from "../components/ProductDetails/ViewSimilar";
import BuyAddButtons from "../components/ProductDetails/BuyAddButtons";

const ProductDetailsScreen = () => {
    const navigation = useNavigation<any>();
    const [showAddToCartModal, setShowAddToCartModal] = useState(false);

    const productInfo = {
        name: "Forever 18 Party dress",
        image: { uri: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' }
    };

    const handleAddToCart = (selection: { size: string; color: string }) => {
        console.log('Adding to cart:', selection);
        setShowAddToCartModal(false);
    };

    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1">
                {/* StatusBar */}
                <StatusBar style="dark"/>
                
                {/* Header Section */}
                <HeaderSection />

                {/* Image Section */}
                <ImageSection /> 

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
                <ProductDetailsInfo />

                {/* Seller Details */}
                <SellerDetails />

                {/* Ratings and Review Section */}
                <RatingsAndReview onRateProductPress={() => navigation.navigate('ReviewProduct')} />

                {/* Photos By Customer */}
                <PhotosByCustomer />

                {/* View Similar Section */}
                <ViewSimilar />

                {/* Buttons */}
                <BuyAddButtons onAddToCartPress={() => setShowAddToCartModal(true)} />
            </ScrollView>

            <AddToCartModal 
                isVisible={showAddToCartModal}
                onClose={() => setShowAddToCartModal(false)}
                productName={productInfo.name}
                productImage={productInfo.image}
                onAddToCart={handleAddToCart}
            />
        </View>
    );
}

export default ProductDetailsScreen;
 