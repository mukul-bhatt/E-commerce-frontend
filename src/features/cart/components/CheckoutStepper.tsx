import { Text, View } from 'react-native';

const steps = [
  { id: 1, label: 'Cart' },
  { id: 2, label: 'Address' },
  { id: 3, label: 'Payment' },
];

interface CheckoutStepperProps {
  currentStep?: number; // 1 = Cart, 2 = Address, 3 = Payment
}

const CheckoutStepper = ({ currentStep = 1 }: CheckoutStepperProps) => {
  return (
    <View className="px-6 py-2 bg-white">
      <View className="flex-row items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <View key={step.id} className="flex-1 items-center">
              <View className="flex-row items-center w-full">
                {/* Left connector line */}
                {index !== 0 && (
                  <View
                    className={`flex-1 h-[1.5px] ${
                      isCompleted || isActive ? 'bg-primary' : 'bg-[#D9D9D9]'
                    }`}
                  />
                )}

                {/* Step circle */}
                <View
                  className={`h-5 w-5 rounded-full items-center justify-center border-[1.5px] ${
                    isCompleted
                      ? 'bg-primary border-primary'
                      : isActive
                      ? 'bg-primary border-primary'
                      : 'bg-white border-[#C8C8C8]'
                  }`}
                >
                  {(isCompleted || isActive) && (
                    <View className="h-2 w-2 rounded-full bg-white" />
                  )}
                </View>

                {/* Right connector line */}
                {index !== steps.length - 1 && (
                  <View
                    className={`flex-1 h-[1.5px] ${
                      isCompleted ? 'bg-primary' : 'bg-[#D9D9D9]'
                    }`}
                  />
                )}
              </View>

              {/* Step label */}
              <Text
                className={`mt-1 text-xs ${
                  isActive || isCompleted
                    ? 'text-primary font-medium'
                    : 'text-[#ABABAB]'
                }`}
              >
                {step.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CheckoutStepper;
