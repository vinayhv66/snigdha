export interface ProductVariant {
  volume: string;
  volumeMl: number;
  price: number;
  originalPrice: number;
  inStock: boolean;
  sku: string;
}

export interface NutritionInfo {
  energyKcal: number;
  proteinG: number;
  totalFatG: number;
  saturatedFatG: number;
  unsaturatedFatG: number;
  transFatG: number;
  cholesterolG: number;
  lauricAcidPct?: number;
  vitaminE?: string;
  ironMg?: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  kannadaName: string;
  badge: string;
  badgeType: 'green' | 'wood' | 'gold';
  category: 'coconut' | 'groundnut' | 'sesame' | 'mustard' | 'safflower' | 'bundles';
  tagline: string;
  shortDesc: string;
  longDesc: string;
  variants: ProductVariant[];
  smokePoint: string;
  extractionMethod: string;
  woodType: string;
  origin: string;
  rating: number;
  reviewsCount: number;
  image: string;
  nutrition: NutritionInfo;
  ingredients: string;
  storageInstructions: string;
  healthBenefits: string[];
  culinaryUses: string[];
  batchPrefix: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'wood-pressed-coconut-oil',
    name: 'Wood-Pressed Coconut Oil',
    subtitle: 'Pure Thengina Enne',
    kannadaName: 'ತೆಂಗಿನ ಎಣ್ಣೆ (Thengina Enne)',
    badge: 'Bestseller',
    badgeType: 'green',
    category: 'coconut',
    tagline: 'Fresh coconut oil pressed in wooden mills by Karnataka farmers',
    shortDesc: 'Pure coconut oil made from sun-dried Tiptur coconuts. Fresh natural aroma with zero chemicals and zero heat.',
    longDesc: 'Made from fresh, sun-dried coconuts from Tiptur farms. Crushed slowly in traditional wooden mills without heat. Naturally pure for daily cooking, hair care, and baby massage.',
    variants: [
      { volume: '500 ml', volumeMl: 500, price: 349, originalPrice: 420, inStock: true, sku: 'SNG-COC-500' },
      { volume: '1000 ml', volumeMl: 1000, price: 649, originalPrice: 799, inStock: true, sku: 'SNG-COC-1000' },
      { volume: '5000 ml (Can)', volumeMl: 5000, price: 2999, originalPrice: 3699, inStock: true, sku: 'SNG-COC-5000' }
    ],
    smokePoint: 'Ideal for daily oggarane, coastal dishes & raw use',
    extractionMethod: 'Traditional Wooden Mill (Mara Ghaana)',
    woodType: 'Natural Hardwood',
    origin: 'Tiptur, Karnataka',
    rating: 4.96,
    reviewsCount: 384,
    image: '/assets/images/authentic_coconut.jpg',
    nutrition: {
      energyKcal: 897,
      proteinG: 0.0,
      totalFatG: 99.5,
      saturatedFatG: 91.3,
      unsaturatedFatG: 7.72,
      transFatG: 0.0,
      cholesterolG: 0.0,
    },
    ingredients: '100% Pure Sun-Dried Coconuts',
    storageInstructions: 'Keep in a cool dry place. Pure coconut oil naturally turns white in cold weather—proof of 100% purity.',
    healthBenefits: [
      'Boosts natural immunity and energy',
      'Easy to digest with zero heavy feeling',
      'Safe and gentle for hair and baby skin'
    ],
    culinaryUses: [
      'Daily oggarane, chutney, neer dose, and saaru',
      'Morning coffee & direct consumption'
    ],
    batchPrefix: 'WG-COC'
  },
  {
    id: 'wood-pressed-groundnut-oil',
    name: 'Wood-Pressed Groundnut Oil',
    subtitle: 'Pure Shenga Enne',
    kannadaName: 'ಶೇಂಗಾ ಎಣ್ಣೆ (Shenga Enne)',
    badge: 'Daily Cooking',
    badgeType: 'wood',
    category: 'groundnut',
    tagline: 'Rich nutty peanut oil for daily frying & Karnataka cooking',
    shortDesc: 'Made from hand-picked Karnataka groundnuts. Gives rich aroma and crisp frying with zero gas or acidity.',
    longDesc: 'Pressed slowly from organic groundnuts in wooden mills. High heat tolerance makes your bajjis, dosas, and daily curries crisp and aromatic without any greasy heaviness.',
    variants: [
      { volume: '500 ml', volumeMl: 500, price: 289, originalPrice: 350, inStock: true, sku: 'SNG-GND-500' },
      { volume: '1000 ml', volumeMl: 1000, price: 549, originalPrice: 680, inStock: true, sku: 'SNG-GND-1000' },
      { volume: '5000 ml (Can)', volumeMl: 5000, price: 2549, originalPrice: 3100, inStock: true, sku: 'SNG-GND-5000' }
    ],
    smokePoint: 'Best for deep frying & daily high-heat cooking',
    extractionMethod: 'Traditional Wooden Mill (Mara Ghaana)',
    woodType: 'Natural Hardwood',
    origin: 'Chitradurga & Chamarajanagar, Karnataka',
    rating: 4.92,
    reviewsCount: 260,
    image: '/assets/images/authentic_groundnut.jpg',
    nutrition: {
      energyKcal: 898,
      proteinG: 0.0,
      totalFatG: 99.8,
      saturatedFatG: 16.8,
      unsaturatedFatG: 82.5,
      transFatG: 0.0,
      cholesterolG: 0.0,
    },
    ingredients: '100% Selected Organic Groundnuts (Shenga)',
    storageInstructions: 'Store in a cool pantry away from heat.',
    healthBenefits: [
      'Good for heart and healthy cholesterol',
      'Zero chemicals and zero artificial smell',
      'Uses 25% less oil while cooking'
    ],
    culinaryUses: [
      'Crispy bajjis, Maddur vade, and dosas',
      'Daily huli, saaru, and palya oggarane'
    ],
    batchPrefix: 'WG-GND'
  },
  {
    id: 'wood-pressed-sesame-oil',
    name: 'Wood-Pressed Sesame Oil (Ellu Enne)',
    subtitle: 'With Organic Palm Jaggery (Taati Bella)',
    kannadaName: 'ಎಳ್ಳೆಣ್ಣೆ (Ellu Enne)',
    badge: 'Ayurvedic',
    badgeType: 'green',
    category: 'sesame',
    tagline: 'Traditional black sesame oil with a touch of organic jaggery',
    shortDesc: 'Aromatic sesame oil crushed in wooden mills with palm jaggery. Perfect for chutney pudi, pickles, and body massage.',
    longDesc: 'Black sesame seeds gently crushed with organic palm jaggery (Taati Bella) in wooden ghaanas to remove seed bitterness. Deep aroma and natural joint lubrication.',
    variants: [
      { volume: '500 ml', volumeMl: 500, price: 389, originalPrice: 470, inStock: true, sku: 'SNG-SES-500' },
      { volume: '1000 ml', volumeMl: 1000, price: 729, originalPrice: 890, inStock: true, sku: 'SNG-SES-1000' },
      { volume: '5000 ml (Can)', volumeMl: 5000, price: 3399, originalPrice: 4100, inStock: true, sku: 'SNG-SES-5000' }
    ],
    smokePoint: 'Great for oggarane, pickles & body massage',
    extractionMethod: 'Wooden Mill with Organic Jaggery',
    woodType: 'Natural Hardwood',
    origin: 'Karnataka Farms',
    rating: 4.98,
    reviewsCount: 195,
    image: '/assets/images/authentic_sesame.jpg',
    nutrition: {
      energyKcal: 896,
      proteinG: 0.0,
      totalFatG: 99.4,
      saturatedFatG: 14.2,
      unsaturatedFatG: 84.8,
      transFatG: 0.0,
      cholesterolG: 0.0,
    },
    ingredients: '95% Pure Sesame Seeds (Ellu), 5% Palm Jaggery (Taati Bella)',
    storageInstructions: 'Store in an airtight bottle. Stays naturally fresh for 18 months.',
    healthBenefits: [
      'Strengthens bones and joint lubrication',
      'Naturally regulates blood pressure',
      'Traditional oil for full body oil massage'
    ],
    culinaryUses: [
      'Mixing with chutney pudi for idli and dose',
      'Authentic huli oggarane & homemade pickles'
    ],
    batchPrefix: 'WG-SES'
  },
  {
    id: 'wood-pressed-mustard-oil',
    name: 'Wood-Pressed Yellow Mustard Oil',
    subtitle: 'Pure Sasive Enne',
    kannadaName: 'ಸಾಸಿವೆ ಎಣ್ಣೆ (Sasive Enne)',
    badge: 'Cold Pressed',
    badgeType: 'wood',
    category: 'mustard',
    tagline: 'Mild aroma yellow mustard oil for pickles and spicy dishes',
    shortDesc: 'Gentle wood-pressed yellow mustard with appetizing aroma and zero throat burn.',
    longDesc: 'Crushed gently in wooden ghaanas. Has a smooth, pleasant taste that brings out the best in pickles and fish curries.',
    variants: [
      { volume: '500 ml', volumeMl: 500, price: 299, originalPrice: 380, inStock: true, sku: 'SNG-MST-500' },
      { volume: '1000 ml', volumeMl: 1000, price: 569, originalPrice: 710, inStock: true, sku: 'SNG-MST-1000' }
    ],
    smokePoint: 'High heat tolerance for spicy cooking & pickles',
    extractionMethod: 'Traditional Wooden Mill',
    woodType: 'Natural Hardwood',
    origin: 'Karnataka Farms',
    rating: 4.88,
    reviewsCount: 142,
    image: '/assets/images/groundnut_oil.jpg',
    nutrition: {
      energyKcal: 898,
      proteinG: 0.0,
      totalFatG: 99.8,
      saturatedFatG: 11.2,
      unsaturatedFatG: 87.6,
      transFatG: 0.0,
      cholesterolG: 0.0
    },
    ingredients: '100% Pure Yellow Mustard Seeds (Sasive)',
    storageInstructions: 'Store in a cool dry pantry.',
    healthBenefits: [
      'Natural digestive support and warmth',
      'Natural protection for homemade pickles',
      'Rich in good plant fats'
    ],
    culinaryUses: [
      'Pickle making and spicy vegetable palya',
      'Fish curries and gravies'
    ],
    batchPrefix: 'WG-MST'
  },
  {
    id: 'wood-pressed-safflower-oil',
    name: 'Wood-Pressed Safflower Oil (Kusube Enne)',
    subtitle: 'Heart-Healthy Light Cooking Oil',
    kannadaName: 'ಕುಸುಬೆ ಎಣ್ಣೆ (Kusube Enne)',
    badge: 'Heart Health',
    badgeType: 'green',
    category: 'safflower',
    tagline: 'Light, non-sticky cooking oil for daily rotis and palya',
    shortDesc: 'Extremely light edible oil with natural Vitamin E. Keeps your food light and easy on the heart.',
    longDesc: 'Pressed from organic Kusube seeds in North Karnataka wooden mills. Light and non-greasy, making your daily chapatis and rotis soft and light.',
    variants: [
      { volume: '500 ml', volumeMl: 500, price: 319, originalPrice: 390, inStock: true, sku: 'SNG-SAF-500' },
      { volume: '1000 ml', volumeMl: 1000, price: 599, originalPrice: 740, inStock: true, sku: 'SNG-SAF-1000' },
      { volume: '5000 ml (Can)', volumeMl: 5000, price: 2799, originalPrice: 3400, inStock: true, sku: 'SNG-SAF-5000' }
    ],
    smokePoint: 'Best for daily rotis, chapatis & light cooking',
    extractionMethod: 'Traditional Wooden Mill',
    woodType: 'Natural Hardwood',
    origin: 'Koppal, Karnataka',
    rating: 4.91,
    reviewsCount: 118,
    image: '/assets/images/groundnut_oil.jpg',
    nutrition: {
      energyKcal: 898,
      proteinG: 0.0,
      totalFatG: 99.8,
      saturatedFatG: 9.8,
      unsaturatedFatG: 90.0,
      transFatG: 0.0,
      cholesterolG: 0.0,
    },
    ingredients: '100% Pure Safflower (Kusube) Seeds',
    storageInstructions: 'Store in cool ambient conditions.',
    healthBenefits: [
      'High in natural Vitamin E for heart care',
      'Zero greasy residue after meals',
      'Helps maintain healthy cholesterol'
    ],
    culinaryUses: [
      'Daily palya, jolada rotti, akki rotti, and chapatis',
      'Light frying and daily cooking'
    ],
    batchPrefix: 'WG-SAF'
  },
  {
    id: 'western-ghats-trio-pack',
    name: 'Karnataka Harvest Trio (3 x 1L Combo)',
    subtitle: 'Coconut (1L) + Groundnut (1L) + Sesame (1L)',
    kannadaName: 'ಕರ್ನಾಟಕ ಹಾರ್ವೆಸ್ಟ್ ಟ್ರಿಯೋ (Harvest Trio)',
    badge: 'Save 22%',
    badgeType: 'green',
    category: 'bundles',
    tagline: 'Complete pure oil pack for your home kitchen (Save 22%)',
    shortDesc: 'Get our 3 most popular pure oils together in 1L glass bottles. Total healthy upgrade for your home kitchen.',
    longDesc: 'Includes 1L Coconut Oil (for morning oggarane & hair care), 1L Groundnut Oil (for daily cooking & snacks), and 1L Sesame Oil (for chutney pudi & health).',
    variants: [
      { volume: '3 x 1000 ml Combo', volumeMl: 3000, price: 1699, originalPrice: 2199, inStock: true, sku: 'SNG-TRIO-3000' }
    ],
    smokePoint: 'All-round daily cooking & health',
    extractionMethod: '100% Wooden Mill (Mara Ghaana)',
    woodType: 'Natural Hardwood',
    origin: 'Karnataka Organic Farms',
    rating: 4.99,
    reviewsCount: 512,
    image: '/assets/images/authentic_coconut.jpg',
    nutrition: {
      energyKcal: 897,
      proteinG: 0.0,
      totalFatG: 99.6,
      saturatedFatG: 41.1,
      unsaturatedFatG: 58.3,
      transFatG: 0.0,
      cholesterolG: 0.0
    },
    ingredients: 'Sun-Dried Coconuts, Fresh Groundnuts, Sesame & Jaggery',
    storageInstructions: 'Store in pantry away from direct heat.',
    healthBenefits: [
      'Complete healthy oil upgrade for the entire family',
      'Zero factory chemicals, zero preservatives',
      'Directly supports Karnataka farmer families'
    ],
    culinaryUses: [
      'Covers all daily cooking, frying, chutney mixing, and wellness'
    ],
    batchPrefix: 'WG-TRIO'
  }
];

export interface BatchData {
  batchCode: string;
  productName: string;
  farmerName: string;
  farmLocation: string;
  harvestDate: string;
  pressingDate: string;
  pressingTemp: string;
  woodType: string;
  purityPct: string;
  acidValue: string;
  moisturePct: string;
  fssaiNumber: string;
}

export const BATCH_DATABASE: Record<string, BatchData> = {
  'WG-COC-2026': {
    batchCode: 'WG-COC-2026',
    productName: 'Coconut Oil / Thengina Enne (1000ml)',
    farmerName: 'Manjunath Swamy & Tiptur Coconut Farmers',
    farmLocation: 'Tiptur, Karnataka',
    harvestDate: 'July 14, 2026',
    pressingDate: 'August 02, 2026',
    pressingTemp: 'Cold Wooden Mill (No Heat)',
    woodType: 'Natural Hardwood Mortar',
    purityPct: '100% Pure & Lab Certified',
    acidValue: 'Pristine Fresh Grade',
    moisturePct: 'Zero Added Water',
    fssaiNumber: '12423008000492'
  },
  'WG-GND-108': {
    batchCode: 'WG-GND-108',
    productName: 'Groundnut Oil / Shenga Enne (1000ml)',
    farmerName: 'Suresh Gowda & Farmer Collective',
    farmLocation: 'Chamarajanagar, Karnataka',
    harvestDate: 'June 28, 2026',
    pressingDate: 'July 20, 2026',
    pressingTemp: 'Cold Wooden Mill',
    woodType: 'Natural Hardwood',
    purityPct: '100% Pure Virgin Grade',
    acidValue: 'Fresh First Press',
    moisturePct: 'Pure Oil',
    fssaiNumber: '12423008000492'
  },
  'WG-SES-772': {
    batchCode: 'WG-SES-772',
    productName: 'Sesame Oil / Ellu Enne (1000ml)',
    farmerName: 'Basavaraj Patil & Sahyadri Agro Farmers',
    farmLocation: 'Shivamogga, Karnataka',
    harvestDate: 'July 05, 2026',
    pressingDate: 'July 25, 2026',
    pressingTemp: 'Cold Wooden Mill',
    woodType: 'Hardwood + Organic Jaggery',
    purityPct: '100% Pure',
    acidValue: 'Fresh Grade',
    moisturePct: 'Pure Oil',
    fssaiNumber: '12423008000492'
  }
};
