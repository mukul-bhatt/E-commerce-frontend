export interface CatalogItem {
  id: string;
  name: string;
  image: string;
}

export interface CatalogSection {
  id: string;
  title: string;
  items: CatalogItem[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  sections: CatalogSection[];
}

export const CATALOG_DATA: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050239.png',
    sections: [],
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081918.png',
    sections: [],
  },
  {
    id: 'appliances',
    name: 'Appliances',
    icon: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png',
    sections: [],
  },
  {
    id: 'mobile-phones',
    name: 'Mobile Phones',
    icon: 'https://cdn-icons-png.flaticon.com/512/644/644458.png',
    sections: [],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'https://cdn-icons-png.flaticon.com/512/3659/3659899.png',
    sections: [],
  },
  {
    id: 'footwear',
    name: 'Footwear',
    icon: 'https://cdn-icons-png.flaticon.com/512/2611/2611152.png',
    sections: [],
  },
  {
    id: 'smart-gadgets',
    name: 'Smart gadgets',
    icon: 'https://cdn-icons-png.flaticon.com/512/3659/3659918.png',
    sections: [],
  },
  {
    id: 'bags',
    name: 'Bags',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050231.png',
    sections: [],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050235.png',
    sections: [
      {
        id: 'bedroom-furniture',
        title: 'Bedroom Furniture',
        items: [
          { id: 'beds', name: 'Beds', image: 'https://placeholder.com/100' },
          { id: 'mattress', name: 'Mattress', image: 'https://placeholder.com/100' },
          { id: 'wardrobe', name: 'Wardrobe', image: 'https://placeholder.com/100' },
          { id: 'side-table', name: 'Side Table', image: 'https://placeholder.com/100' },
          { id: 'chair', name: 'Chair', image: 'https://placeholder.com/100' },
          { id: 'dressing-table', name: 'Dressing Table', image: 'https://placeholder.com/100' },
          { id: 'racks', name: 'Racks', image: 'https://placeholder.com/100' },
          { id: 'stools', name: 'Stools', image: 'https://placeholder.com/100' },
        ],
      },
      {
        id: 'living-room-furniture',
        title: 'Living room Furniture',
        items: [
          { id: 'sofa', name: 'Sofa', image: 'https://placeholder.com/100' },
          { id: 'recliner', name: 'Recliner', image: 'https://placeholder.com/100' },
          { id: 'tv-units', name: 'TV Units', image: 'https://placeholder.com/100' },
          { id: 'cabinets', name: 'Cabinets', image: 'https://placeholder.com/100' },
          { id: 'shelf', name: 'Shelf', image: 'https://placeholder.com/100' },
          { id: 'coffee-table', name: 'Coffee table', image: 'https://placeholder.com/100' },
          { id: 'chairs', name: 'Chairs', image: 'https://placeholder.com/100' },
          { id: 'home-temples', name: 'Home Temples', image: 'https://placeholder.com/100' },
        ],
      },
      {
        id: 'study-and-office-furniture',
        title: 'Study and office Furniture',
        items: [
          { id: 'desk', name: 'Desk', image: 'https://placeholder.com/100' },
          { id: 'table', name: 'Table', image: 'https://placeholder.com/100' },
          { id: 'portable-tables', name: 'Portable Tables', image: 'https://placeholder.com/100' },
          { id: 'study-table', name: 'Study Table', image: 'https://placeholder.com/100' },
          { id: 'book-shelf', name: 'Book Shelf', image: 'https://placeholder.com/100' },
          { id: 'gaming-chair', name: 'Gaming chair', image: 'https://placeholder.com/100' },
          { id: 'cabinet', name: 'Cabinet', image: 'https://placeholder.com/100' },
          { id: 'shelves', name: 'Shelves', image: 'https://placeholder.com/100' },
        ],
      },
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050237.png',
    sections: [],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050233.png',
    sections: [],
  },
  {
    id: 'decor',
    name: 'Decor',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050241.png',
    sections: [],
  },
  {
    id: 'stationary',
    name: 'Stationary',
    icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050243.png',
    sections: [],
  },
];
