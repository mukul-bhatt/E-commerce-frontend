import type { PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = PropsWithChildren<{
  scroll?: boolean;
  className?: string;
  contentClassName?: string;
}>;

export function Screen({
  children,
  scroll = false,
  className = '',
  contentClassName = '',
}: ScreenProps) {
  const containerClassName = `flex-1 bg-slate-950 ${className}`.trim();
  const innerClassName = `px-6 py-6 ${contentClassName}`.trim();

  if (scroll) {
    return (
      <SafeAreaView className={containerClassName} edges={['top']}>
        <ScrollView className="flex-1">
          <View className={innerClassName}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className={containerClassName} edges={['top']}>
      <View className={innerClassName}>{children}</View>
    </SafeAreaView>
  );
}
