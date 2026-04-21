export type Category = 'summer' | 'winter' | 'sports';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  shortDescription: string;
  fabricOptions: string[];
  gsmOptions?: string[];
  moq: number;
  image: string;
  wornImage?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'terry-shorts',
    name: 'Terry Shorts',
    category: 'summer',
    shortDescription: 'Premium athletic terry shorts for maximum comfort and mobility.',
    fabricOptions: ['Imported China (Smooth Finish)', 'Local Pakistan (Durable)'],
    gsmOptions: ['200', '240', '280'],
    moq: 30,
    image: '/terry-shorts.png',
    wornImage: '/terry-shorts-worn.png'
  },
  {
    id: '2',
    slug: 'cotton-shorts',
    name: 'Cotton Shorts',
    category: 'summer',
    shortDescription: 'Breathable cotton shorts for casual wear and light training.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['160', '180', '200'],
    moq: 30,
    image: '/terry-shorts.png',  // fallback
    wornImage: '/cotton-shorts-worn.png'
  },
  {
    id: '3',
    slug: 'crew-neck-tshirt',
    name: 'Crew Neck T-Shirt',
    category: 'summer',
    shortDescription: 'Classic crew neck t-shirt, a staple for any collection.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['140', '160', '180'],
    moq: 30,
    image: '/dry-fit-tshirt.png',  // fallback
    wornImage: '/crew-neck-tshirt-worn.png'
  },
  {
    id: '4',
    slug: 'polo-shirt',
    name: 'Polo Shirt',
    category: 'summer',
    shortDescription: 'Sophisticated polo shirts with structured collars.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['200', '220'],
    moq: 30,
    image: '/polo-shirt.png',
    wornImage: '/polo-shirt-worn.png'
  },
  {
    id: '5',
    slug: 'cotton-tracksuit',
    name: 'Cotton Tracksuit',
    category: 'summer',
    shortDescription: 'Lightweight cotton tracksuit ideal for summer evenings.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['240', '280'],
    moq: 30,
    image: '/cotton-tracksuit.png',
    wornImage: '/cotton-tracksuit-worn.png'
  },
  {
    id: '6',
    slug: 'hoodie',
    name: 'Heavyweight Hoodie',
    category: 'winter',
    shortDescription: 'Thick, warm hoodies designed for extreme comfort.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['300', '350', '400'],
    moq: 30,
    image: '/hoodie.png',
    wornImage: '/hoodie-worn.png'
  },
  {
    id: '7',
    slug: 'sweatshirt',
    name: 'Sweatshirt',
    category: 'winter',
    shortDescription: 'Classic winter sweatshirts with ribbed cuffs and hem.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['280', '320'],
    moq: 30,
    image: '/hoodie.png',  // fallback
    wornImage: '/sweatshirt-worn.png'
  },
  {
    id: '8',
    slug: 'trousers',
    name: 'Athletic Trousers',
    category: 'winter',
    shortDescription: 'Tapered athletic trousers for training and lifestyle.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['250', '300'],
    moq: 30,
    image: '/cotton-tracksuit.png',  // fallback
    wornImage: '/trousers-worn.png'
  },
  {
    id: '9',
    slug: 'puffer-jacket',
    name: 'Puffer Jacket',
    category: 'winter',
    shortDescription: 'Insulated puffer jackets for maximum warmth in cold climates.',
    fabricOptions: ['Imported Parachute / Nylon', 'Local Parachute'],
    moq: 30,
    image: '/puffer-jacket.png',
    wornImage: '/puffer-jacket-worn.png'
  },
  {
    id: '10',
    slug: 'varsity-jacket',
    name: 'Varsity Jacket',
    category: 'winter',
    shortDescription: 'Classic collegiate style varsity jackets with premium snap buttons.',
    fabricOptions: ['Wool with Leather Sleeves', 'Fleece with PU Sleeves'],
    moq: 30,
    image: '/varsity-jacket.png',
    wornImage: '/varsity-jacket-worn.png'
  },
  {
    id: '11',
    slug: 'zipper-jacket',
    name: 'Zipper Jacket',
    category: 'winter',
    shortDescription: 'Sleek full-zip jackets for versatile layering.',
    fabricOptions: ['Imported China', 'Local Pakistan'],
    gsmOptions: ['280', '320'],
    moq: 30,
    image: '/zipper-jacket.png',
    wornImage: '/zipper-jacket-worn.png'
  },
  {
    id: '12',
    slug: 'dry-fit-tshirt',
    name: 'Dry Fit T-Shirt',
    category: 'sports',
    shortDescription: 'Performance dry-fit t-shirts engineered for intense workouts.',
    fabricOptions: ['Mesh', 'Interlock'],
    gsmOptions: ['120', '140', '160'],
    moq: 30,
    image: '/dry-fit-tshirt.png',
    wornImage: '/dry-fit-tshirt-worn.png'
  },
  {
    id: '13',
    slug: 'sports-tracksuit',
    name: 'Technical Sports Tracksuit',
    category: 'sports',
    shortDescription: 'High-performance tracksuits for professional teams and athletes.',
    fabricOptions: ['Trinda', 'Polyester Fleece', 'Scuba', 'Nylon Crush', 'Popcorn Spandex', 'Micro Twill'],
    gsmOptions: ['200', '240', '280'],
    moq: 30,
    image: '/sports-tracksuit.png',
    wornImage: '/sports-tracksuit-worn.png'
  }
];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
