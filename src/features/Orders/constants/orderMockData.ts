export type OrderStatus = 'Out for delivery' | 'Delivered' | 'Cancelled' | 'Return' | 'Return Initiated';

export interface OrderItem {
  id: string;
  orderId: string;
  status: OrderStatus;
  isPrepaid: boolean;
  date: string;
  productName: string;
  sellerName: string;
  productImage: string;
  variant: string;
  actionType: 'delivery' | 'rate' | 'review' | 'refund_bank' | 'refund_wallet' | 'pickup';
  actionDate?: string;
  rating?: number;
}

export const ORDERS_DATA: OrderItem[] = [
  {
    id: '1',
    orderId: 'ID3241',
    status: 'Out for delivery',
    isPrepaid: true,
    date: '22 May 2025',
    productName: 'Blue Floral Summer Dress for Women',
    sellerName: 'Octave Ltd',
    productImage: 'https://placeholder.com/100',
    variant: 'XL',
    actionType: 'delivery',
    actionDate: '22 May 2025',
  },
  {
    id: '2',
    orderId: 'ID5641',
    status: 'Delivered',
    isPrepaid: false,
    date: '2 April 2025',
    productName: 'Home decor Potter clay jug ceramic white',
    sellerName: 'Clay kalaa',
    productImage: 'https://placeholder.com/100',
    variant: 'Ceramic White',
    actionType: 'rate',
  },
  {
    id: '3',
    orderId: 'ID5931',
    status: 'Delivered',
    isPrepaid: false,
    date: '12 March 2025',
    productName: 'Tullips coffe machine 5L',
    sellerName: 'Tullips co.',
    productImage: 'https://placeholder.com/100',
    variant: 'Metallic black',
    actionType: 'review',
    rating: 4,
  },
  {
    id: '4',
    orderId: 'ID9041',
    status: 'Cancelled',
    isPrepaid: false,
    date: '12 March 2025',
    productName: 'Tullips coffe machine 5L',
    sellerName: 'Tullips co.',
    productImage: 'https://placeholder.com/100',
    variant: 'Metallic black',
    actionType: 'refund_bank',
    actionDate: '12 march 2025',
  },
  {
    id: '5',
    orderId: 'ID5001',
    status: 'Return',
    isPrepaid: false,
    date: '12 Jan 2025',
    productName: 'Under ground merch cap',
    sellerName: 'Bewakooff',
    productImage: 'https://placeholder.com/100',
    variant: 'Black',
    actionType: 'refund_wallet',
    actionDate: '12 Jan 2025',
  },
  {
    id: '6',
    orderId: 'ID3241',
    status: 'Return Initiated',
    isPrepaid: false,
    date: '25 May 2025',
    productName: 'Blue Floral Summer Dress for Women',
    sellerName: 'Octave Ltd',
    productImage: 'https://placeholder.com/100',
    variant: 'XL',
    actionType: 'pickup',
    actionDate: '25 may 2025',
  },
];
