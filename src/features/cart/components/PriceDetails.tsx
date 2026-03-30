import { Text, View } from 'react-native';

export interface PriceBreakdown {
  itemCount: number;
  totalMRP: number;
  discount: number;
  couponDiscount: number;
  platformFees: number;
  deliveryCharge: number;
  freeDelivery: boolean;
  totalAmount: number;
}

interface PriceDetailsProps {
  breakdown?: PriceBreakdown;
}

const defaultBreakdown: PriceBreakdown = {
  itemCount: 2,
  totalMRP: 1200,
  discount: 220,
  couponDiscount: 20,
  platformFees: 10,
  deliveryCharge: 10,
  freeDelivery: true,
  totalAmount: 900,
};

const Row = ({
  label,
  value,
  valueColor = 'text-black',
  strikeValue,
  isFreeDelivery,
}: {
  label: string;
  value: string;
  valueColor?: string;
  strikeValue?: string;
  isFreeDelivery?: boolean;
}) => (
  <View className="flex-row items-center justify-between py-2">
    <Text className="text-sm text-[#444]">{label}</Text>
    <View className="flex-row items-center gap-1.5">
      {strikeValue && (
        <Text className="text-sm text-[#999] line-through">₹{strikeValue}</Text>
      )}
      {isFreeDelivery ? (
        <Text className="text-sm font-semibold text-discountOnBrands-green">Free Delivery</Text>
      ) : (
        <Text className={`text-sm font-medium ${valueColor}`}>{value}</Text>
      )}
    </View>
  </View>
);

const PriceDetails = ({ breakdown = defaultBreakdown }: PriceDetailsProps) => {
  return (
    <View className="mx-4 mt-3 px-4 py-3 rounded-xl border border-cardStroke bg-white">
      {/* Heading */}
      <Text className="text-base font-bold text-black mb-1">Price details</Text>

      {/* Rows */}
      <Row label={`Price(${breakdown.itemCount} items)`} value={`₹${breakdown.totalMRP}`} />
      <Row
        label="Discount"
        value={`-₹${breakdown.discount}`}
        valueColor="text-discountOnBrands-green"
      />
      <Row
        label="Coupon Discount"
        value={`-₹${breakdown.couponDiscount}`}
        valueColor="text-discountOnBrands-green"
      />
      <Row label="Platform Fees" value={`₹${breakdown.platformFees}`} />
      <Row
        label="Delivery Charges"
        value=""
        strikeValue={`${breakdown.deliveryCharge}`}
        isFreeDelivery={breakdown.freeDelivery}
      />

      {/* Divider */}
      <View className="h-[1px] bg-cardStroke my-2" />

      {/* Total */}
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-bold text-black">Total Amount</Text>
        <Text className="text-sm font-bold text-black">₹{breakdown.totalAmount}</Text>
      </View>
    </View>
  );
};

export default PriceDetails;
