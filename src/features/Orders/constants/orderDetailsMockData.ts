import { OrderStatus } from './orderMockData';

export interface ShippingAddress {
  name: string;
  address: string;
  mobile: string;
}

export interface PriceDetails {
  itemsCount: number;
  totalPrice: number;
  discount: number;
  couponDiscount: number;
  platformFees: number;
  deliveryCharges: number;
}

export interface TrackingStep {
  label: string;
  date: string;
  isCompleted: boolean;
}

export interface OrderDetailItem {
  id: string;
  orderId: string;
  status: OrderStatus;
  productName: string;
  sellerName: string;
  productImage: string;
  variant: string;
  actionDate: string;
  shippingAddress: ShippingAddress;
  priceDetails: PriceDetails;
  trackingSteps: TrackingStep[];
  returnAvailableTill?: string;
}

export const ORDER_DETAILS_MOCK: Record<string, OrderDetailItem> = {
  'ID3241': {
    id: '1',
    orderId: 'ID3241',
    status: 'Out for delivery',
    productName: 'Blue Floral Summer Dress for Women',
    sellerName: 'Octave Ltd',
    productImage: 'https://placeholder.com/100',
    variant: 'XL',
    actionDate: '22 May 2025',
    shippingAddress: {
      name: 'Shreya Singh',
      address: '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
      mobile: '+91 9898126390, +91 8976764512',
    },
    priceDetails: {
      itemsCount: 2,
      totalPrice: 1200,
      discount: 220,
      couponDiscount: 20,
      platformFees: 10,
      deliveryCharges: 0,
    },
    trackingSteps: [
      { label: 'Ordered', date: '18 May', isCompleted: true },
      { label: 'Shipped', date: '19 May', isCompleted: true },
      { label: 'Out for Delivery', date: '22 May', isCompleted: true },
      { label: 'Delivery', date: '22 May', isCompleted: false },
    ],
  },
  'ID5641': {
    id: '2',
    orderId: 'ID5641',
    status: 'Delivered',
    productName: 'Blue Floral Summer Dress for Women',
    sellerName: 'Octave Ltd',
    productImage: 'https://placeholder.com/100',
    variant: 'XL',
    actionDate: '22 May 2025',
    shippingAddress: {
      name: 'Shreya Singh',
      address: '224, third floor, gate 15 pocket 2 jasola Vihar , near sanjeevani hospital , New Delhi 110017',
      mobile: '+91 9898126390, +91 8976764512',
    },
    priceDetails: {
      itemsCount: 2,
      totalPrice: 1200,
      discount: 220,
      couponDiscount: 20,
      platformFees: 10,
      deliveryCharges: 0,
    },
    trackingSteps: [
      { label: 'Ordered', date: '18 May', isCompleted: true },
      { label: 'Shipped', date: '19 May', isCompleted: true },
      { label: 'Delivered', date: '22 May', isCompleted: true },
    ],
    returnAvailableTill: '28 May 2025',
  },
};

export const ORDER_RETURN_REASONS = [
  'Size/Fit inappropriate',
  'Received different product',
  'Received different colour',
  'Product is defective',
  'Did not like the product',
  'Did not like the material/fabric',
  'Do not need the product anymore',
  'Got somewhere else for lesser price',
  'Product is missing',
  'Product is torn/used',
];

export const AVAILABLE_SIZES = ['S', 'M', 'L'];
