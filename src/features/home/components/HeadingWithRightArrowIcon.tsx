import { View, Text } from "react-native"
import {AntDesign} from '@expo/vector-icons'
import Timer from './Timer'


const HeadingWithRightArrowIcon = ({title, isTimerPresent=false}: {title: string, isTimerPresent?: boolean}) => {
                
    return (
        <View className="flex-row justify-between items-center my-4">

            <View className="flex-row max-w-[80%] items-center gap-2">
            <Text className="text-2xl font-bold font-gidugu">{title}</Text>

            {isTimerPresent && 
            <View className="-inset-1">
                <Timer />
            </View>
            }

            </View>
            <View className="bg-primary px-4 py-1 rounded-md">
                <AntDesign name="arrow-right" size={20} color="white" />
            </View>

        </View>
    )
}

export default HeadingWithRightArrowIcon