// Catalog of 18 unique houseplants organized into 3 distinct categories
// (6 plants per category) with stable IDs, realistic prices, and botanical descriptions.

export const FALLBACK_PLANT_IMAGE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="%23e8efe3"/><path d="M200 80 C260 120 280 200 240 280 C220 240 200 200 200 80 Z" fill="%234b7b4d"/><path d="M200 80 C140 120 120 200 160 280 C180 240 200 200 200 80 Z" fill="%232e5430"/><path d="M200 160 L200 320" stroke="%23233f25" stroke-width="6" stroke-linecap="round"/><text x="200" y="360" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="%23233f25">Paradise Nursery Plant</text></svg>';

export const categories = [
  {
    id: 'easy-care',
    name: 'Easy-Care Favorites',
    tagline: 'Resilient and forgiving',
    description: 'Hardy, adaptable houseplants that thrive with minimal attention—perfect for beginners or busy schedules.',
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 18.00,
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b77?auto=format&fit=crop&w=800&q=80',
        description: 'Hardy vertical sword-like foliage that tolerates drought and low light.',
      },
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1632207691143-643e2b4a6a4b?auto=format&fit=crop&w=800&q=80',
        description: 'Lustrous, deep-green waxy leaves that require watering only once a month.',
      },
      {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1596724817752-16c80521e102?auto=format&fit=crop&w=800&q=80',
        description: 'Vibrant trailing vines with marbled gold-and-emerald heart-shaped leaves.',
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        price: 14.00,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80',
        description: 'Graceful ribbon-like striped leaves that effortlessly produce baby plantlets.',
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 20.00,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80',
        description: 'Broad, glossy green leaves paired with elegant white spathes; blooms indoors.',
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 16.00,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
        description: 'Sturdy succulent with fleshy jade-green leaves, symbol of prosperity and luck.',
      },
    ],
  },
  {
    id: 'statement-plants',
    name: 'Statement Plants',
    tagline: 'Bold living art',
    description: 'Large, dramatic foliage specimens designed to transform living rooms, offices, and bright corners.',
    plants: [
      {
        id: 'monstera-deliciosa',
        name: 'Monstera Deliciosa',
        price: 34.00,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
        description: 'Dramatic Swiss-cheese leaves that create an immediate tropical indoor focal point.',
      },
      {
        id: 'rubber-tree',
        name: 'Rubber Tree',
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
        description: 'Glossy burgundy-tinted leaves with a bold, upright architectural profile.',
      },
      {
        id: 'bird-of-paradise',
        name: 'Bird of Paradise',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1597055181300-a8b4be6c4a5b?auto=format&fit=crop&w=800&q=80',
        description: 'Regal, oversized tropical banana leaves that thrive in bright sunny spaces.',
      },
      {
        id: 'fiddle-leaf-fig',
        name: 'Fiddle Leaf Fig',
        price: 38.00,
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
        description: 'Spectacular violin-shaped leaves favored by modern interior designers.',
      },
      {
        id: 'areca-palm',
        name: 'Areca Palm',
        price: 36.00,
        image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
        description: 'Feathery, fountain-like fronds that add natural airiness and gentle movement.',
      },
      {
        id: 'dragon-tree',
        name: 'Dragon Tree',
        price: 26.00,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
        description: 'Slender, ribbon-like foliage with subtle red borders on woody sculpted stems.',
      },
    ],
  },
  {
    id: 'pet-friendly',
    name: 'Pet-Friendly Picks',
    tagline: '100% safe for furry companions',
    description: 'Non-toxic, leafy houseplants that bring vibrant nature into homes shared with cats and dogs.',
    plants: [
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        price: 19.00,
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80',
        description: 'Plush cascading fronds that flourish in humid bathrooms or shaded corners.',
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        price: 21.00,
        image: 'https://images.unsplash.com/photo-1596724817752-16c80521e102?auto=format&fit=crop&w=800&q=80',
        description: 'Classic Victorian table palm, completely non-toxic and tolerant of low light.',
      },
      {
        id: 'calathea-rattlesnake',
        name: 'Rattlesnake Calathea',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1589244159943-460088ed5c92?auto=format&fit=crop&w=800&q=80',
        description: 'Wavy patterned leaves with rich purple undersides that move with the sun.',
      },
      {
        id: 'prayer-plant',
        name: 'Prayer Plant',
        price: 17.00,
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
        description: 'Intricately veined tricolor leaves that fold upward in evening prayer.',
      },
      {
        id: 'zebra-haworthia',
        name: 'Zebra Haworthia',
        price: 13.00,
        image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80',
        description: 'Pet-safe compact succulent with distinct textured white horizontal bands.',
      },
      {
        id: 'peperomia-watermelon',
        name: 'Watermelon Peperomia',
        price: 23.00,
        image: 'https://images.unsplash.com/photo-1597055181300-a8b4be6c4a5b?auto=format&fit=crop&w=800&q=80',
        description: 'Charming rounded leaves that resemble the striped rind of a watermelon.',
      },
    ],
  },
];

// Flat array helper for search or lookup
export const allPlants = categories.flatMap((cat) =>
  cat.plants.map((p) => ({ ...p, category: cat.name, categoryId: cat.id }))
);