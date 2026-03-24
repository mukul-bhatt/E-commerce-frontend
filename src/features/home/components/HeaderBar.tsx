import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const headerItems = [
    { id: 1, title: "Sort", icon: "sort-variant", library: "MaterialCommunityIcons", route: 'SortModal' },
    { id: 2, title: "Filter", icon: "filter", library: "Feather", route: 'FilterModal' },
    { id: 3, title: "Gender", icon: "gender-male-female", library: "MaterialCommunityIcons" },
    { id: 4, title: "Trending", icon: "trending-up", library: "Feather" },
];

const Icon = ({ library, name, size, color }: any) => {
    if (library === "MaterialCommunityIcons") return <MaterialCommunityIcons name={name} size={size} color={color} />;
    if (library === "Feather") return <Feather name={name} size={size} color={color} />;
    if (library === "AntDesign") return <AntDesign name={name} size={size} color={color} />;
    return null;
}

const HeaderBar = () => {
    const navigation = useNavigation<any>();

    return (
        <View className="px-4 py-2 bg-[#EEEEEE]">
            <View className="flex-row items-center gap-2">
                {headerItems.map((item) => (
                    <Pressable
                        key={item.id}
                        onPress={() => item.route && navigation.navigate(item.route)}
                        className={`h-8 flex-1 items-center justify-center rounded-full border border-[#ABABAB]`}
                    >
                        <View className="flex-row items-center gap-1">
                            <Icon library={item.library} name={item.icon} size={14} color="black" />
                            <Text className="text-[#000000A8] text-sm">{item.title}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}

export default HeaderBar