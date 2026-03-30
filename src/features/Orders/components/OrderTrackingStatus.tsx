import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TrackingStep } from '../constants/orderDetailsMockData';
import { colors } from '../../../theme/colors';

interface OrderTrackingStatusProps {
  steps: TrackingStep[];
}

const OrderTrackingStatus = ({ steps }: OrderTrackingStatusProps) => {
  return (
    <View className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
      <Text className="text-[13px] font-bold text-slate-900 mb-6">Track your order</Text>
      
      <View className="flex-row items-center justify-between px-2">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const nextStep = !isLast ? steps[index + 1] : null;
          const lineCompleted = nextStep?.isCompleted;

          return (
            <React.Fragment key={step.label}>
              <View className="items-center">
                <View
                  className={`h-6 w-6 rounded-full items-center justify-center ${
                    step.isCompleted ? 'bg-green-600' : 'bg-slate-200'
                  }`}
                >
                  <Ionicons
                    name={step.isCompleted ? 'checkmark' : 'ellipse'}
                    size={step.isCompleted ? 14 : 10}
                    color={step.isCompleted ? '#fff' : '#94a3b8'}
                  />
                </View>
                <View className="items-center mt-2 w-16">
                  <Text className={`text-[10px] font-bold text-center ${step.isCompleted ? 'text-slate-800' : 'text-slate-400'}`}>
                    {step.label}
                  </Text>
                  <Text className="text-[8px] text-slate-400 mt-0.5">{step.date}</Text>
                </View>
              </View>

              {!isLast && (
                <View
                  className={`flex-1 h-[2px] mb-8 ${
                    lineCompleted ? 'bg-green-600' : 'bg-slate-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>

      <View className="mt-6 pt-4 border-t border-slate-100 border-dashed">
        <Text className="text-[11px] text-slate-500">
          Cancellation is not available for this order
        </Text>
      </View>
    </View>
  );
};

export default OrderTrackingStatus;
