// src/data/products.js

const products = [
    // --- Makeup Products ---
    {
        id: 'mkp101',
        name: 'Velvet Matte Lipstick',
        brand: 'LuxeLips',
        category: 'Lipsticks',
        baseImageUrl: '/content/lipstick.jpg', // Ensure this path is correct in your public folder
        description: 'Achieve a bold, long-lasting matte finish with our signature velvet lipstick. Infused with hydrating ingredients for comfortable wear.',
        rating: 4.8,
        variants: [
            { id: 'mkp101-v1', name: 'Ruby Red', color: '#FF0000', size: '3.5g', price: 28.00, imageUrl: '/product-images/lipstick-ruby-red.jpg' },
            { id: 'mkp101-v2', name: 'Crimson Kiss', color: '#DC143C', size: '3.5g', price: 28.00, imageUrl: '/product-images/lipstick-crimson-kiss.jpg' },
            { id: 'mkp101-v3', name: 'Berry Bliss', color: '#8A0505', size: '3.5g', price: 28.00, imageUrl: '/product-images/lipstick-berry-bliss.jpg' },
        ],
        reviews: [
            { id: 'r101-1', reviewer: 'BeautyFanatic', rating: 5, comment: 'Absolutely love the color and how long it lasts!', date: '2024-07-15' },
            { id: 'r101-2', reviewer: 'LipstickLover', rating: 4, comment: 'Great matte finish, but can be a bit drying.', date: '2024-07-10' },
        ],
    },
    {
        id: 'mkp102',
        name: 'Radiant Glow Foundation',
        brand: 'GlowPro',
        category: 'Foundations',
        baseImageUrl: '/content/foundation.jpg',
        description: 'Lightweight and buildable foundation for a flawless, radiant complexion. Blurs imperfections and evens skin tone.',
        rating: 4.5,
        variants: [
            { id: 'mkp102-v1', name: 'Light Beige', color: '#F0E6D2', size: '30ml', price: 35.00, imageUrl: '/product-images/foundation-light-beige.jpg' },
            { id: 'mkp102-v2', name: 'Warm Nude', color: '#D4B892', size: '30ml', price: 35.00, imageUrl: '/product-images/foundation-warm-nude.jpg' },
            { id: 'mkp102-v3', name: 'Caramel', color: '#A0522D', size: '30ml', price: 35.00, imageUrl: '/product-images/foundation-caramel.jpg' },
        ],
        reviews: [
            { id: 'r102-1', reviewer: 'FlawlessSkin', rating: 5, comment: 'My new go-to foundation! Blends like a dream.', date: '2024-07-18' },
            { id: 'r102-2', reviewer: 'MakeupGuru', rating: 4, comment: 'Good coverage, but wish it lasted longer on oily skin.', date: '2024-07-12' },
        ],
    },
    {
        id: 'mkp103',
        name: 'Voluminous Lash Mascara',
        brand: 'LashMaster',
        category: 'Eyes',
        baseImageUrl: '/content/mascara.jpg',
        description: 'Dramatic volume and length for your lashes. Smudge-proof and long-wearing formula.',
        rating: 4.7,
        variants: [
            { id: 'mkp103-v1', name: 'Blackest Black', color: '#000000', size: '8ml', price: 22.00, imageUrl: '/product-images/mascara-black.jpg' },
            { id: 'mkp103-v2', name: 'Deep Brown', color: '#4A2C2A', size: '8ml', price: 22.00, imageUrl: '/product-images/mascara-brown.jpg' },
        ],
        reviews: [
            { id: 'r103-1', reviewer: 'LashQueen', rating: 5, comment: 'Gives amazing volume without clumping!', date: '2024-07-20' },
        ],
    },
    {
        id: 'mkp104',
        name: 'Silky Powder Blush',
        brand: 'BlushBeam',
        category: 'Cheeks',
        baseImageUrl: '/content/blush.jpg',
        description: 'A finely milled blush that adds a natural flush of color to your cheeks. Buildable and blendable.',
        rating: 4.6,
        variants: [
            { id: 'mkp104-v1', name: 'Petal Pink', color: '#FFB6C1', size: '6g', price: 25.00, imageUrl: '/product-images/blush-pink.jpg' },
            { id: 'mkp104-v2', name: 'Peach Perfect', color: '#FFDAB9', size: '6g', price: 25.00, imageUrl: '/product-images/blush-peach.jpg' },
        ],
        reviews: [], // No reviews for this product yet
    },
    {
        id: 'mkp105',
        name: 'Brow Sculpting Gel',
        brand: 'BrowGenius',
        category: 'Brows',
        baseImageUrl: '/content/browgel.jpg',
        description: 'Shapes and sets brows for a polished look. Long-lasting and smudge-resistant.',
        rating: 4.4,
        variants: [
            { id: 'mkp105-v1', name: 'Clear', color: '#F8F8F8', size: '5ml', price: 18.00, imageUrl: '/product-images/browgel-clear.jpg' },
            { id: 'mkp105-v2', name: 'Soft Brown', color: '#8B4513', size: '5ml', price: 18.00, imageUrl: '/product-images/browgel-soft-brown.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'mkp106',
        name: 'Liquid Eyeliner Pro',
        brand: 'LineDefine',
        category: 'Eyes',
        baseImageUrl: '/content/eyeliner.jpg',
        description: 'Precision liquid eyeliner for sharp, defined lines. Intense black pigment.',
        rating: 4.7,
        variants: [
            { id: 'mkp106-v1', name: 'Jet Black', color: '#000000', size: '2.5ml', price: 20.00, imageUrl: '/product-images/eyeliner-black.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'mkp107',
        name: 'Hydrating Face Primer',
        brand: 'PrimeBase',
        category: 'Primers',
        baseImageUrl: '/content/primer.jpg',
        description: 'Prepares skin for flawless makeup application, extending wear and hydrating.',
        rating: 4.5,
        variants: [
            { id: 'mkp107-v1', name: 'Universal', size: '30ml', price: 28.00, imageUrl: '/product-images/primer-universal.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'mkp108',
        name: 'Shimmering Highlighter',
        brand: 'GlowBeam',
        category: 'Highlighters',
        baseImageUrl: '/content/highlighter.jpg',
        description: 'Adds a luminous glow to high points of the face. Finely milled and blendable.',
        rating: 4.9,
        variants: [
            { id: 'mkp108-v1', name: 'Champagne Pop', color: '#F0E68C', size: '8g', price: 30.00, imageUrl: '/product-images/highlighter-champagne.jpg' },
            { id: 'mkp108-v2', name: 'Rose Gold', color: '#B76E79', size: '8g', price: 30.00, imageUrl: '/product-images/highlighter-rose-gold.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'mkp109',
        name: 'Cream Eyeshadow Palette',
        brand: 'EyeArt',
        category: 'Eyes',
        baseImageUrl: '/content/eyeshadow.jpg',
        description: 'Richly pigmented cream eyeshadows for vibrant, long-lasting looks.',
        rating: 4.6,
        variants: [
            { id: 'mkp109-v1', name: 'Warm Neutrals', color: '#D2B48C', size: '10g', price: 38.00, imageUrl: '/product-images/eyeshadow-neutrals.jpg' },
            { id: 'mkp109-v2', name: 'Smoky Hues', color: '#696969', size: '10g', price: 38.00, imageUrl: '/product-images/eyeshadow-smoky.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'mkp110',
        name: 'Lip Liner Precision',
        brand: 'LinePerfect',
        category: 'Lipsticks',
        baseImageUrl: '/content/lipliner.jpg',
        description: 'Defines lips with precision for a perfect pout. Prevents feathering.',
        rating: 4.3,
        variants: [
            { id: 'mkp110-v1', name: 'Nude Beige', color: '#DDCBAA', size: '1.2g', price: 15.00, imageUrl: '/product-images/lipliner-nude.jpg' },
            { id: 'mkp110-v2', name: 'Rich Berry', color: '#800020', size: '1.2g', price: 15.00, imageUrl: '/product-images/lipliner-berry.jpg' },
        ],
        reviews: [],
    },

    // --- Dressing Products ---
    {
        id: 'drs201',
        name: 'Elegant Summer Dress',
        brand: 'ChicWear',
        category: 'Dresses',
        baseImageUrl: '/content/sd4.jpg',
        description: 'Lightweight and breathable summer dress, perfect for any occasion. Flowy design with a flattering silhouette.',
        rating: 4.9,
        variants: [
            { id: 'drs201-v1', name: 'Floral Breeze', color: '#E0BBE4', size: 'S', price: 75.00, imageUrl: '/content/sd1.jpg' },
            { id: 'drs201-v2', name: 'Floral Breeze', color: '#E0BBE4', size: 'M', price: 75.00, imageUrl: '/content/sd2.jpg' },
            { id: 'drs201-v3', name: 'Floral Breeze', color: '#E0BBE4', size: 'L', price: 75.00, imageUrl: '/content/sd3.jpg' },
            { id: 'drs201-v4', name: 'Ocean Blue', color: '#A0D9F7', size: 'S', price: 70.00, imageUrl: '/content/sd5.jpg' },
            { id: 'drs201-v5', name: 'Ocean Blue', color: '#A0D9F7', size: 'M', price: 70.00, imageUrl: '/content/sd6.jpg' },
        ],
        reviews: [
            { id: 'r201-1', reviewer: 'Fashionista', rating: 5, comment: 'So comfortable and stylish! Received many compliments.', date: '2024-07-19' },
            { id: 'r201-2', reviewer: 'SummerVibes', rating: 4, comment: 'Love the print, but runs a bit small.', date: '2024-07-14' },
        ],
    },
    {
        id: 'drs202',
        name: 'Classic White Blouse',
        brand: 'TimelessAttire',
        category: 'Tops',
        baseImageUrl: '/content/top2.jpg',
        description: 'A versatile white blouse, perfect for office or casual wear. Made from premium cotton for comfort.',
        rating: 4.7,
        variants: [
            { id: 'drs202-v1', name: 'White', size: 'XS', price: 45.00, imageUrl:'/content/t1.jpg' },
            { id: 'drs202-v2', name: 'White', size: 'S', price: 45.00, imageUrl: '/content/t2.jpg' },
            { id: 'drs202-v3', name: 'White', size: 'M', price: 45.00, imageUrl: '/content/t3.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'drs203',
        name: 'High-Waisted Denim Jeans',
        brand: 'DenimDream',
        category: 'Bottoms',
        baseImageUrl: '/content/bot2.jpg',
        description: 'Comfortable and stylish high-waisted jeans with a perfect fit. A wardrobe essential.',
        rating: 4.6,
        variants: [
            { id: 'drs203-v1', name: 'Light Wash', size: '26', price: 60.00, imageUrl: '/product-images/jeans-light-26.jpg' },
            { id: 'drs203-v2', name: 'Light Wash', size: '28', price: 60.00, imageUrl: '/product-images/jeans-light-28.jpg' },
            { id: 'drs203-v3', name: 'Dark Wash', size: '26', price: 60.00, imageUrl: '/product-images/jeans-dark-26.jpg' },
            { id: 'drs203-v4', name: 'Dark Wash', size: '28', price: 60.00, imageUrl: '/product-images/jeans-dark-28.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'drs204',
        name: 'Cozy Knit Cardigan',
        brand: 'ComfortChic',
        category: 'Outerwear',
        baseImageUrl: '/content/out1.jpg',
        description: 'Soft and warm knit cardigan, perfect for layering. A cozy addition to your wardrobe.',
        rating: 4.8,
        variants: [
            { id: 'drs204-v1', name: 'Beige', size: 'S', price: 55.00, imageUrl: '/product-images/cardigan-beige-s.jpg' },
            { id: 'drs204-v2', name: 'Beige', size: 'M', price: 55.00, imageUrl: '/product-images/cardigan-beige-m.jpg' },
            { id: 'drs204-v3', name: 'Grey', size: 'S', price: 55.00, imageUrl: '/product-images/cardigan-grey-s.jpg' },
        ],
        reviews: [],
    },
    // --- New Traditional Suits ---
    {
        id: 'drs301',
        name: 'Embroidered Silk Sari',
        brand: 'HeritageWeave',
        category: 'Sari',
        baseImageUrl: '/content/sari1.jpg',
        description: 'Luxurious silk sari adorned with intricate embroidery, perfect for grand occasions. Comes with unstitched blouse piece.',
        rating: 4.9,
        variants: [
            { id: 'drs301-v1', name: 'Royal Blue', color: '#4169E1', size: 'Free Size', price: 250.00, imageUrl: '/product-images/sari-blue.jpg' },
            { id: 'drs301-v2', name: 'Deep Maroon', color: '#800000', size: 'Free Size', price: 250.00, imageUrl: '/product-images/sari-maroon.jpg' },
        ],
        reviews: [
            { id: 'r301-1', reviewer: 'WeddingGuest', rating: 5, comment: 'Absolutely stunning! The fabric feels amazing and the embroidery is exquisite.', date: '2024-07-22' },
        ],
    },
    {
        id: 'drs302',
        name: 'Casual Cotton Kurti',
        brand: 'DailyChic',
        category: 'Kurti',
        baseImageUrl: '/content/kurti1.jpg',
        description: 'Comfortable and stylish cotton kurti for everyday wear. Features contemporary prints and a relaxed fit.',
        rating: 4.5,
        variants: [
            { id: 'drs302-v1', name: 'Sky Blue Print', color: '#87CEEB', size: 'S', price: 35.00, imageUrl: '/product-images/kurti-skyblue-s.jpg' },
            { id: 'drs302-v2', name: 'Sky Blue Print', color: '#87CEEB', size: 'M', price: 35.00, imageUrl: '/product-images/kurti-skyblue-m.jpg' },
            { id: 'drs302-v3', name: 'Mint Green Print', color: '#98FB98', size: 'S', price: 35.00, imageUrl: '/product-images/kurti-mint-s.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'drs303',
        name: 'Festive 3-Piece Suit',
        brand: 'CelebrationWear',
        category: '3 Piece',
        baseImageUrl: '/content/3p1.jpg',
        description: 'Exquisite 3-piece suit with embroidered shirt, matching trousers, and a delicate net dupatta. Ideal for festive gatherings.',
        rating: 4.7,
        variants: [
            { id: 'drs303-v1', name: 'Crimson Gold', color: '#DC143C', size: 'S', price: 120.00, imageUrl: '/product-images/3piece-crimson-s.jpg' },
            { id: 'drs303-v2', name: 'Crimson Gold', color: '#DC143C', size: 'M', price: 120.00, imageUrl: '/product-images/3piece-crimson-m.jpg' },
            { id: 'drs303-v3', name: 'Emerald Green', color: '#50C878', size: 'S', price: 120.00, imageUrl: '/product-images/3piece-emerald-s.jpg' },
        ],
        reviews: [
            { id: 'r303-1', reviewer: 'PartyReady', rating: 5, comment: 'The material is so rich and the embroidery is stunning. Perfect for Eid!', date: '2024-07-21' },
        ],
    },
    {
        id: 'drs304',
        name: 'Everyday 2-Piece Lawn Suit',
        brand: 'LawnLuxe',
        category: '2 Piece',
        baseImageUrl: '/content/2p1.jpg',
        description: 'Lightweight lawn 2-piece suit with printed shirt and matching trousers. Perfect for daily wear in warm weather.',
        rating: 4.4,
        variants: [
            { id: 'drs304-v1', name: 'Aqua Floral', color: '#7FFFD4', size: 'S', price: 45.00, imageUrl: '/product-images/2piece-aqua-s.jpg' },
            { id: 'drs304-v2', name: 'Aqua Floral', size: 'M', price: 45.00, imageUrl: '/product-images/2piece-aqua-m.jpg' },
            { id: 'drs304-v3', name: 'Peach Geometric', color: '#FFDAB9', size: 'S', price: 45.00, imageUrl: '/product-images/2piece-peach-s.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'drs305',
        name: 'Premium Lawn Collection',
        brand: 'LawnElite',
        category: 'Lawn', // Specific category for Lawn suits
        baseImageUrl: '/content/lawn1.jpg',
        description: 'Unstitched premium lawn fabric with exquisite digital prints and embroidery. Create your own masterpiece.',
        rating: 4.8,
        variants: [
            { id: 'drs305-v1', name: 'Azure Bloom (Unstitched)', size: '3pc', price: 65.00, imageUrl: '/product-images/lawn-azure.jpg' },
            { id: 'drs305-v2', name: 'Golden Hour (Unstitched)', size: '3pc', price: 65.00, imageUrl: '/product-images/lawn-golden.jpg' },
        ],
        reviews: [],
    },
    {
        id: 'drs306',
        name: 'Bridal Gown - Traditional',
        brand: 'BridalElegance',
        category: 'Bridal', // Specific category for Bridal wear
        baseImageUrl: '/content/d.jpg',
        description: 'Hand-embellished traditional bridal gown with intricate zardozi work and rich fabric. Made to order.',
        rating: 5.0,
        variants: [
            { id: 'drs306-v1', name: 'Classic Red', color: '#FF0000', size: 'Custom', price: 1500.00, imageUrl: '/product-images/bridal-red.jpg' },
            { id: 'drs306-v2', name: 'Ivory Gold', color: '#F8F8F8', size: 'Custom', price: 1500.00, imageUrl: '/product-images/bridal-ivory.jpg' },
        ],
        reviews: [
            { id: 'r306-1', reviewer: 'HappyBride', rating: 5, comment: 'My dream dress! The craftsmanship is incredible and it fit perfectly.', date: '2024-07-10' },
            { id: 'r306-2', reviewer: 'WeddingPlanner', rating: 5, comment: 'Saw this dress at a client\'s wedding, truly breathtaking and unique.', date: '2024-06-28' },
        ],
    },
];

// Combine all product types
const allProducts = {
    makeup: products.filter(p => p.id.startsWith('mkp')),
    dressing: products.filter(p => p.id.startsWith('drs')),
    // jewelry: [], // Future: add jewelry products here
};

export default allProducts;

// Helper function to get unique categories for filters
export const getUniqueMakeupCategories = () => {
    const categories = allProducts.makeup.map(product => product.category);
    return ['All', ...new Set(categories)]; // 'All' + unique categories
};

export const getUniqueDressingCategories = () => {
    const categories = allProducts.dressing.map(product => product.category);
    return ['All', ...new Set(categories)]; // 'All' + unique categories
};
