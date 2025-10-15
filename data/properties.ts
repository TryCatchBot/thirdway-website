export interface Property {
  id: string;
  name: string;
  title: string;
  location: string;
  status: 'Available' | 'Sold';
  image: string;
  description: string;
  price?: string;
  type?: 'residential' | 'commercial' | 'land';
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  features?: string[];
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'Dallas Prime',
    title: 'Dallas Prime',
    location: 'Ibadan',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Prime land location in Ibadan with excellent development potential.',
    price: '₦25,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '1000 sqm',
    features: ['Road Access', 'Electricity', 'Water', 'Surveyed']
  },
  {
    id: '2',
    name: 'Peru',
    title: 'Peru',
    location: 'Oke Oyi, Ilorin',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Strategic land parcel in Oke Oyi with modern infrastructure access.',
    price: '₦18,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '800 sqm',
    features: ['Road Access', 'Electricity', 'Water', 'Surveyed']
  },
  {
    id: '3',
    name: 'Denmark',
    title: 'Denmark',
    location: 'Oluyole, Ibadan',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Premium residential land in Oluyole with great investment value.',
    price: '₦35,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '1200 sqm',
    features: ['Road Access', 'Electricity', 'Water', 'Surveyed']
  },
  {
    id: '4',
    name: 'Sydney',
    title: 'Sydney',
    location: 'Ilara, Epe',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Coastal land opportunity in Ilara with waterfront access.',
    price: '₦45,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '1500 sqm',
    features: ['Waterfront Access', 'Road Access', 'Electricity', 'Surveyed']
  },
  {
    id: '5',
    name: 'Nairobi',
    title: 'Nairobi',
    location: 'Moniya, Ibadan',
    status: 'Sold',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Expanding development area in Moniya with growth potential.',
    price: '₦20,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '900 sqm',
    features: ['Road Access', 'Electricity', 'Water', 'Surveyed']
  },
  {
    id: '6',
    name: 'Nairobi Phase II',
    title: 'Nairobi Phase II',
    location: 'Moniya, Ibadan',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Second phase of Nairobi development with enhanced amenities.',
    price: '₦22,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '950 sqm',
    features: ['Enhanced Amenities', 'Road Access', 'Electricity', 'Surveyed']
  },
  {
    id: '7',
    name: 'TheAtlantic View',
    title: 'TheAtlantic View',
    location: 'Poka, Epe',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Scenic land with Atlantic Ocean views in Poka.',
    price: '₦50,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '1800 sqm',
    features: ['Ocean Views', 'Waterfront Access', 'Road Access', 'Surveyed']
  },
  {
    id: '8',
    name: 'Ontario Ilorin',
    title: 'Ontario Ilorin',
    location: 'Idigba, Sabo, Ilorin',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Urban land in Sabo with commercial development potential.',
    price: '₦30,000,000',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    size: '1100 sqm',
    features: ['Commercial Potential', 'Road Access', 'Electricity', 'Surveyed']
  }
];
