export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  category: string;
}

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    price: 199.00,
    image: '/plants/neem.jpg',
    category: 'Forest Trees'
  },
  {
    id: '2',
    name: 'Peepal / Sacred Fig',
    scientificName: 'Ficus religiosa',
    price: 730.00,
    image: '/plants/peepal.jpg',
    category: 'Forest Trees'
  },
  {
    id: '3',
    name: 'Banyan',
    scientificName: 'Ficus benghalensis',
    price: 880.00,
    image: '/plants/banyan.jpg',
    category: 'Forest Trees'
  },
  {
    id: '4',
    name: 'Arjuna',
    scientificName: 'Terminalia arjuna',
    price: 480.00,
    image: '/plants/arjuna.jpg',
    category: 'Forest Trees'
  },
  {
    id: '5',
    name: 'Mango',
    scientificName: 'Mangifera indica',
    price: 449.00,
    image: '/plants/mango.jpg',
    category: 'Fruit Trees'
  },
  {
    id: '6',
    name: 'Palash',
    scientificName: 'Butea monosperma',
    price: 469.00,
    image: '/plants/palash.jpg',
    category: 'Flowering Trees'
  },
  {
    id: '7',
    name: 'Jamun',
    scientificName: 'Syzygium cumini',
    price: 490.00,
    image: '/plants/jamun.jpg',
    category: 'Fruit Trees'
  },
  {
    id: '8',
    name: 'Bael',
    scientificName: 'Aegle marmelos',
    price: 460.00,
    image: '/plants/bael.jpg',
    category: 'Fruit Trees'
  },
  {
    id: '9',
    name: 'Ashoka',
    scientificName: 'Saraca asoca',
    price: 199.00,
    image: '/plants/ashoka.jpg',
    category: 'Flowering Trees'
  },
  {
    id: '10',
    name: 'Tamarind',
    scientificName: 'Tamarindus indica',
    price: 300.00,
    image: '/plants/tamarind.jpg',
    category: 'Fruit Trees'
  },
  {
    id: '11',
    name: 'Gulmohar',
    scientificName: 'Delonix regia',
    price: 499.00,
    image: '/plants/gulmohar.jpg',
    category: 'Flowering Trees'
  },
  {
    id: '12',
    name: 'Indian Gooseberry / Amla',
    scientificName: 'Phyllanthus emblica',
    price: 119.00,
    image: '/plants/amla.jpg',
    category: 'Fruit Trees'
  }
];

export const categories = [
  {
    id: 'forest-trees',
    name: 'Forest Trees 🌳',
    description: 'Real trees planted in forests or public green areas',
    image: '/categories/forest.jpg'
  },
  {
    id: 'home-plants',
    name: 'Home Plants 🪴',
    description: 'Indoor and garden plants for personal spaces',
    image: '/categories/home.jpg'
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers & Soil 🌱',
    description: 'Organic and eco-friendly plant nutrition for healthy growth',
    image: '/categories/fertilizers.jpg'
  },
  {
    id: 'accessories',
    name: 'Plant Accessories ✨',
    description: 'Decorative pots, watering tools, and gamified items for in-app growth',
    image: '/categories/accessories.jpg'
  },
  {
    id: 'diy-kits',
    name: 'DIY & Craft Kits 🎨',
    description: 'Activities like terrariums, bonsai kits, or plant decoration kits',
    image: '/categories/diy.jpg'
  },
  {
    id: 'gifts',
    name: 'Gifts & Green Experiences 🎁',
    description: 'Plant-a-tree gifts, forest sponsorships, or eco-friendly merchandise',
    image: '/categories/gifts.jpg'
  }
];