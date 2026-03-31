import React from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ReviewCard from '../components/ReviewCard';

const MOCK_REVIEWS = [
  {
    id: '1',
    productImage: { uri: "https://assets0.mirraw.com/images/12864321/image_long_webp.webp?1727455095" },
    productName: 'Women Red dress Xl',
    rating: 4,
    reviewTitle: 'Teriffic purchase',
    reviewBody: 'This dress is so beautiful, the fabric is good, fitting is nice and it looks so good on me.',
    postedDate: '1 month ago'
  },
  {
    id: '2',
    productImage: { uri: "https://images.nike.com/is/image/DotCom/CT8527_600_A_PREM?wid=640&hei=640&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=1.1,0.5,0,0" },
    productName: 'Nike Red shoe limited',
    rating: 4,
    reviewTitle: 'Loved this purchase',
    reviewBody: 'This shoe is so comfortable and the color is vibrant. Perfect for my morning runs.',
    postedDate: '2 months ago'
  },
  {
    id: '3',
    productImage: { uri: "https://images.nike.com/is/image/DotCom/CT8527_600_A_PREM?wid=640&hei=640&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=1.1,0.5,0,0" },
    productName: 'Nike Red shoe limited',
    rating: 4,
    reviewTitle: 'Loved this purchase',
    reviewBody: 'The fitting is exactly as described. Great value for money.',
    postedDate: '2 months ago'
  }
];


export function RatingsReviewsScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 32 }}
      >
        {MOCK_REVIEWS.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </ScrollView>
    </View>
  );
}
