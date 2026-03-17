import { View, Text } from "react-native"
import {AntDesign} from '@expo/vector-icons'


const HeadingWithRightArrowIcon = ({title}: {title: string}) => {
                
    return (
        <View className="flex-row justify-between items-center my-4">

            <Text className="text-2xl font-bold font-gidugu max-w-[80%] font-gidugu">{title}</Text>

            <View className="bg-primary px-4 py-1 rounded-md">
                <AntDesign name="arrow-right" size={20} color="white" />
            </View>

        </View>
    )
}

export default HeadingWithRightArrowIcon