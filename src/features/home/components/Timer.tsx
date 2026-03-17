import { View, Text } from "react-native";
import { useState, useEffect } from "react";

// Set how many seconds to count down from
const INITIAL_SECONDS = 9 * 3600 + 45 * 60 + 12;

const TimeBlock = ({ value }: { value: string }) => (
    <View className="bg-timer-textPinkBg/30 w-8 h-8 items-center justify-center rounded-lg">
        <Text className="text-lg font-bold text-timer-textPink">{value}</Text>
    </View>
);

const Separator = () => (
    <Text className="text-xl font-bold text-timer-textPink mx-1">:</Text>
);

const Timer = () => {
    const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

    useEffect(() => {
        if (secondsLeft <= 0) return;
        const interval = setInterval(() => {
            setSecondsLeft((s) => s - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [secondsLeft]);

    const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(secondsLeft % 60).padStart(2, "0");

    return (
        <View className="flex-row items-center justify-center py-4 gap-1">
            <TimeBlock value={hours} />
            <Separator />
            <TimeBlock value={minutes} />
            <Separator />
            <TimeBlock value={seconds} />
        </View>
    );
};

export default Timer;