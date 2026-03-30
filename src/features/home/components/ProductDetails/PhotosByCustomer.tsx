import { View, Text, Image, TouchableOpacity } from "react-native";
import { fonts } from "../../../../theme/typography";
import ReviewItem from "./ReviewItem";

const PhotosByCustomer = () => {
    const data = [
        { id: 1, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 2, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 3, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 4, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 5, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 6, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 7, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 8, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 9, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
        { id: 10, image: 'https://assets0.mirraw.com/images/9806973/120-Green-1_zoom.jpg?1640781681' },
    ];

    return (
        <View className="p-4 border-b border-gray-100">
            <Text className="text-lg font-bold" style={{ fontFamily: fonts.rubikBold }}>
                Photos by Customer
            </Text>

            <View className="flex-row mt-3 space-x-3 gap-2">
                {data.slice(0, 4).map((item) => (
                    <TouchableOpacity key={item.id} className="rounded-lg p-0.5">
                        <Image 
                            className="w-16 h-16 rounded-md" 
                            source={{ uri: item.image }} 
                        />
                    </TouchableOpacity>
                ))}

                <TouchableOpacity className="flex rounded-md p-0.5 bg-gray-300 items-center justify-center w-16 h-16">
                    <Text className="text-sm" >+23 </Text>
                    <Text className="text-sm">more</Text>
                </TouchableOpacity>
            </View>
            
            <View className="mt-8 gap-y-4">
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />

                <TouchableOpacity className="flex-row items-center justify-center">
                    <Text className="text-md font-bold text-primary" style={{ fontFamily: fonts.rubikBold }}>
                        See All Reviews
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PhotosByCustomer;
