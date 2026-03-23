import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import RangeSlider from 'rn-range-slider';

const Thumb = () => (
  <View className="w-6 h-6 border-2 border-white rounded-full bg-primary shadow-md" />
);

const Rail = () => (
  <View className="flex-1 h-1 rounded-sm bg-[#e9e9e9]" />
);

const RailSelected = () => (
  <View className="h-1 bg-primary rounded-sm" />
);

const Label = ({ text }: { text: number | string }) => (
  <View className="items-center p-2 bg-primary rounded">
    <Text className="text-sm text-white font-bold">₹{text}</Text>
  </View>
);

const Notch = () => (
  <View className="w-2 h-2 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
);

const PriceRangeSlider = () => {
  const [low, setLow] = useState(200);
  const [high, setHigh] = useState(5000);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value: number) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue: number, highValue: number) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  return (
    <View className="flex-1 p-3 items-stretch">
      <View className="flex-row justify-between mb-8 px-2">
        <View className="items-center">
          <Text className="text-gray-400 text-xs mb-1">Min Price</Text>
          <Text className="text-black font-bold text-lg">₹{low}</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-400 text-xs mb-1">Max Price</Text>
          <Text className="text-black font-bold text-lg">₹{high}</Text>
        </View>
      </View>
      <RangeSlider
        style={{}}
        min={0}
        max={10000}
        step={100}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </View>
  );
};

export default PriceRangeSlider;
