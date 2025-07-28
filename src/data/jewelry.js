// src/data/jewelry.js - Contains Jewelry products

const jewelryProducts = [
    // --- Rings ---
    {
        id: 'jwl101',
        name: 'Diamond Solitaire Ring',
        brand: 'SparkleGems',
        category: 'Rings',
        baseImageUrl: '/content/r1.jpg',
        description: 'A timeless diamond solitaire ring, perfect for engagements or special occasions. Certified ethically sourced diamond.',
        rating: 5.0,
        variants: [
            { id: 'jwl101-v1', name: '0.5 Carat', size: 'Size 6', price: 1200.00, imageUrl: '/product-images/ring-solitaire-05ct.jpg' },
            { id: 'jwl101-v2', name: '1.0 Carat', size: 'Size 7', price: 2500.00, imageUrl: '/product-images/ring-solitaire-10ct.jpg' },
        ],
    },
    { id: 'jwl102', name: 'Emerald Cut Eternity Band', brand: 'ForeverBrilliance', category: 'Rings', baseImageUrl: '/content/r2.jpg', description: 'Elegant eternity band featuring exquisite emerald cut diamonds set in white gold.', rating: 4.9, variants: [{ id: 'jwl102-v1', name: 'White Gold', size: 'Size 7', price: 900.00 }] },
    { id: 'jwl103', name: 'Sapphire & Diamond Ring', brand: 'RoyalJewels', category: 'Rings', baseImageUrl: '/content/r3.jpg', description: 'Stunning ring with a vibrant sapphire center stone surrounded by sparkling diamonds.', rating: 4.8, variants: [{ id: 'jwl103-v1', name: 'Blue Sapphire', size: 'Size 6', price: 750.00 }] },
    { id: 'jwl104', name: 'Minimalist Gold Band', brand: 'PureGrace', category: 'Rings', baseImageUrl: '/content/r4.jpg', description: 'Simple and elegant 18K gold band, perfect for daily wear or stacking.', rating: 4.7, variants: [{ id: 'jwl104-v1', name: 'Yellow Gold', size: 'Size 8', price: 300.00 }] },
    { id: 'jwl105', name: 'Vintage Inspired Halo Ring', brand: 'TimelessTreasures', category: 'Rings', baseImageUrl: '/content/r5.jpg', description: 'Ornate vintage-inspired halo ring with intricate filigree details and a central pearl.', rating: 4.9, variants: [{ id: 'jwl105-v1', name: 'Rose Gold Pearl', size: 'Size 7', price: 600.00 }] },
    { id: 'jwl106', name: 'Adjustable Silver Ring', brand: 'ModernFlex', category: 'Rings', baseImageUrl: '/content/r6.jpg', description: 'Contemporary adjustable silver ring with unique geometric design, fits most sizes.', rating: 4.5, variants: [{ id: 'jwl106-v1', name: 'Sterling Silver', size: 'Adjustable', price: 80.00 }] },
    { id: 'jwl107', name: 'Statement Cocktail Ring', brand: 'BoldStatements', category: 'Rings', baseImageUrl: '/content/r7.jpg', description: 'Large, eye-catching cocktail ring with multiple colored gemstones, perfect for parties.', rating: 4.7, variants: [{ id: 'jwl107-v1', name: 'Multi-Stone', size: 'Size 7', price: 180.00 }] },
    { id: 'jwl108', name: 'Black Onyx Men\'s Ring', brand: 'GentleTouch', category: 'Rings', baseImageUrl: '/content/r8.jpg', description: 'Bold men\'s ring with a striking black onyx stone set in stainless steel, modern and masculine.', rating: 4.6, variants: [{ id: 'jwl108-v1', name: 'Stainless Steel', size: 'Size 10', price: 95.00 }] },
    { id: 'jwl109', name: 'Pearl Cluster Ring', brand: 'OceanGlow', category: 'Rings', baseImageUrl: '/content/r9.jpg', description: 'Delicate ring featuring a cluster of freshwater pearls, feminine and elegant.', rating: 4.8, variants: [{ id: 'jwl109-v1', name: 'Freshwater Pearls', size: 'Size 6', price: 110.00 }] },
    { id: 'jwl110', name: 'Engagement Ring Set', brand: 'PromiseKeepers', category: 'Rings', baseImageUrl: '/content/r3.jpg', description: 'Matching engagement ring and wedding band set, designed for timeless appeal and comfortable wear.', rating: 5.0, variants: [{ id: 'jwl110-v1', name: 'Round Cut Set', size: 'Size 7', price: 3500.00 }] },


    // --- Necklaces ---
    {
        id: 'jwl201',
        name: 'Delicate Gold Chain',
        brand: 'MinimalistChains',
        category: 'Necklaces',
        baseImageUrl: '/content/n1.jpg',
        description: 'Fine 14K gold chain, perfect for layering or wearing alone. A timeless everyday piece.',
        rating: 4.7,
        variants: [
            { id: 'jwl201-v1', name: '16 Inch', size: '16in', price: 150.00, imageUrl: '/product-images/necklace-gold-16.jpg' },
            { id: 'jwl201-v2', name: '18 Inch', size: '18in', price: 170.00, imageUrl: '/product-images/necklace-gold-18.jpg' },
        ],
    },
    { id: 'jwl202', name: 'Pearl Pendant Necklace', brand: 'OceanicPearls', category: 'Necklaces', baseImageUrl: '/content/n2.jpg', description: 'Classic pearl pendant on a sterling silver chain, elegant and versatile.', rating: 4.8, variants: [{ id: 'jwl202-v1', name: 'White Pearl', size: '18in', price: 90.00 }] },
    { id: 'jwl203', name: 'Custom Nameplate Necklace', brand: 'PersonalTouch', category: 'Necklaces', baseImageUrl: '/content/n3.jpg', description: 'Personalized nameplate necklace in script font, a unique gift.', rating: 4.9, variants: [{ id: 'jwl203-v1', name: 'Gold Plated', size: '16in', price: 75.00 }] },
    { id: 'jwl204', name: 'Choker with Charms', brand: 'Trendsetter', category: 'Necklaces', baseImageUrl: '/content/n4.jpg', description: 'Trendy velvet choker with small dangling charms, adds a bohemian flair.', rating: 4.5, variants: [{ id: 'jwl204-v1', name: 'Black Velvet', size: 'Adjustable', price: 40.00 }] },
    { id: 'jwl205', name: 'Layered Coin Necklace', brand: 'BohoChic', category: 'Necklaces', baseImageUrl: '/content/n5.jpg', description: 'Multi-layered necklace with antique coin pendants, perfect for a bohemian look.', rating: 4.6, variants: [{ id: 'jwl205-v1', name: 'Gold Tone', size: '20in', price: 65.00 }] },
    { id: 'jwl206', name: 'Statement Gemstone Necklace', brand: 'EarthlyTreasures', category: 'Necklaces', baseImageUrl: '/content/n6.jpg', description: 'Bold necklace featuring a large, raw amethyst crystal pendant, unique and natural.', rating: 4.7, variants: [{ id: 'jwl206-v1', name: 'Amethyst', size: '24in', price: 110.00 }] },
    { id: 'jwl207', name: 'Heart Locket Necklace', brand: 'Sentimentals', category: 'Necklaces', baseImageUrl: '/content/n7.jpg', description: 'Classic heart-shaped locket necklace, perfect for holding cherished memories.', rating: 4.8, variants: [{ id: 'jwl207-v1', name: 'Silver', size: '18in', price: 80.00 }] },
   
    // --- Earrings ---
    {
        id: 'jwl301',
        name: 'Classic Diamond Studs',
        brand: 'BrilliantCut',
        category: 'Earrings',
        baseImageUrl: '/content/e1.jpg',
        description: 'Timeless diamond stud earrings, a versatile staple for any jewelry collection. Comes with secure screw-backs.',
        rating: 5.0,
        variants: [
            { id: 'jwl301-v1', name: '0.25 Carat Pair', size: 'Small', price: 300.00, imageUrl: '/product-images/earrings-diamond-025.jpg' },
            { id: 'jwl301-v2', name: '0.50 Carat Pair', size: 'Medium', price: 600.00, imageUrl: '/product-images/earrings-diamond-050.jpg' },
        ],
    },
    { id: 'jwl302', name: 'Hoop Earrings - Gold', brand: 'EverydayHoops', category: 'Earrings', baseImageUrl: '/content/e2.jpg', description: 'Lightweight gold-plated hoop earrings, perfect for daily wear. Available in various sizes.', rating: 4.7, variants: [{ id: 'jwl302-v1', name: 'Small', size: '20mm', price: 40.00 }] },
    { id: 'jwl303', name: 'Pearl Drop Earrings', brand: 'GracefulDrops', category: 'Earrings', baseImageUrl: '/content/e3.jpg', description: 'Elegant pearl drop earrings on a sterling silver hook, sophisticated and classic.', rating: 4.8, variants: [{ id: 'jwl303-v1', name: 'White Pearl', size: 'Medium', price: 60.00 }] },
    { id: 'jwl304', name: 'Statement Tassel Earrings', brand: 'BohoAccents', category: 'Earrings', baseImageUrl: '/content/e4.jpg', description: 'Vibrant tassel earrings with intricate beadwork, perfect for adding a pop of color.', rating: 4.5, variants: [{ id: 'jwl304-v1', name: 'Red Tassel', size: 'Large', price: 30.00 }] },
    { id: 'jwl305', name: 'Cuff Earrings - Silver', brand: 'EdgyElegance', category: 'Earrings', baseImageUrl: '/content/e5.jpg', description: 'Modern silver ear cuffs, no piercing required. Adds a stylish edge to your look.', rating: 4.6, variants: [{ id: 'jwl305-v1', name: 'Sterling Silver', size: 'One Size', price: 25.00 }] },
   

    // --- Bracelets ---
    {
        id: 'jwl401',
        name: 'Diamond Tennis Bracelet',
        brand: 'LuxeWrist',
        category: 'Bracelets',
        baseImageUrl: '/content/b1.jpg',
        description: 'Classic diamond tennis bracelet with a continuous line of sparkling diamonds. Secure clasp.',
        rating: 5.0,
        variants: [
            { id: 'jwl401-v1', name: '1.0 Carat', size: '7 Inch', price: 800.00, imageUrl: '/product-images/bracelet-tennis-1ct.jpg' },
            { id: 'jwl401-v2', name: '2.0 Carat', size: '7.5 Inch', price: 1500.00, imageUrl: '/product-images/bracelet-tennis-2ct.jpg' },
        ],
    },
    { id: 'jwl402', name: 'Charm Bracelet', brand: 'CharmStory', category: 'Bracelets', baseImageUrl: '/content/b2.jpg', description: 'Sterling silver charm bracelet with a selection of popular charms, expandable.', rating: 4.7, variants: [{ id: 'jwl402-v1', name: 'Heart & Key', size: '7 Inch', price: 120.00 }] },
    { id: 'jwl403', name: 'Beaded Friendship Bracelet', brand: 'UnityBands', category: 'Bracelets', baseImageUrl: '/content/b3.jpg', description: 'Hand-strung beaded bracelet, perfect for sharing with friends. Adjustable fit.', rating: 4.5, variants: [{ id: 'jwl403-v1', name: 'Turquoise', size: 'Adjustable', price: 20.00 }] },
    { id: 'jwl404', name: 'Cuff Bracelet - Gold', brand: 'BoldWrist', category: 'Bracelets', baseImageUrl: '/content/b4.jpg', description: 'Chunky gold-plated cuff bracelet, adds a statement to any outfit.', rating: 4.6, variants: [{ id: 'jwl404-v1', name: 'Gold Tone', size: 'One Size', price: 70.00 }] },
    { id: 'jwl405', name: 'Leather Wrap Bracelet', brand: 'UrbanEdge', category: 'Bracelets', baseImageUrl: '/content/b5.jpg', description: 'Multi-wrap leather bracelet with metallic accents, bohemian and edgy.', rating: 4.4, variants: [{ id: 'jwl405-v1', name: 'Brown Leather', size: 'Adjustable', price: 45.00 }] },
    { id: 'jwl406', name: 'Anklet with Shells', brand: 'BeachVibes', category: 'Bracelets', baseImageUrl: '/content/b6.jpg', description: 'Delicate anklet adorned with small natural shells, perfect for summer.', rating: 4.3, variants: [{ id: 'jwl406-v1', name: 'White Shells', size: '9-10 Inch', price: 25.00 }] },
    { id: 'jwl407', name: 'Bangle Bracelet Set', brand: 'StackableStyle', category: 'Bracelets', baseImageUrl: '/content/b7.jpg', description: 'Set of thin gold-plated bangle bracelets, perfect for stacking.', rating: 4.7, variants: [{ id: 'jwl407-v1', name: 'Gold Set', size: 'Set of 3', price: 50.00 }] },
    { id: 'jwl408', name: 'Men\'s Chain Bracelet', brand: 'MasculineMetal', category: 'Bracelets', baseImageUrl: '/content/b8.jpg', description: 'Heavy duty stainless steel chain bracelet for men, bold and durable.', rating: 4.5, variants: [{ id: 'jwl408-v1', name: 'Silver Tone', size: '8.5 Inch', price: 60.00 }] },
   
    // --- Bridal Jewelry Sets ---
    {
        id: 'jwl501',
        name: 'Bridal Diamond Set',
        brand: 'WeddingBliss',
        category: 'Bridal Sets',
        baseImageUrl: '/content/h1.jpg',
        description: 'Exquisite diamond bridal set including a necklace, earrings, and bracelet. Perfect for your wedding day.',
        rating: 5.0,
        variants: [
            { id: 'jwl501-v1', name: 'Classic Diamond', size: 'Set', price: 3000.00, imageUrl: '/product-images/bridal-set-diamond.jpg' },
        ],
    },
    { id: 'jwl502', name: 'Traditional Kundan Set', brand: 'HeritageCraft', category: 'Bridal Sets', baseImageUrl: '/content/h2.jpg', description: 'Handcrafted Kundan jewelry set with intricate meenakari work, a timeless bridal piece.', rating: 4.9, variants: [{ id: 'jwl502-v1', name: 'Red & Gold', size: 'Set', price: 800.00 }] },
    { id: 'jwl503', name: 'Pearl & Crystal Bridal Set', brand: 'ElegantAffairs', category: 'Bridal Sets', baseImageUrl: '/content/h3.jpg', description: 'Delicate pearl and crystal bridal set, adds a subtle shimmer to your bridal look.', rating: 4.8, variants: [{ id: 'jwl503-v1', name: 'Silver & Pearl', size: 'Set', price: 500.00 }] },
    { id: 'jwl504', name: 'Emerald & Gold Bridal Set', brand: 'RoyalGems', category: 'Bridal Sets', baseImageUrl: '/content/h4.jpg', description: 'Regal bridal set featuring brilliant emeralds set in antique gold, truly majestic.', rating: 5.0, variants: [{ id: 'jwl504-v1', name: 'Emerald Green', size: 'Set', price: 1200.00 }] },
    { id: 'jwl505', name: 'Contemporary Minimalist Bridal', brand: 'ModernWeddings', category: 'Bridal Sets', baseImageUrl: '/content/h5.jpg', description: 'Sleek and modern bridal set with clean lines and subtle diamond accents, understated elegance.', rating: 4.7, variants: [{ id: 'jwl505-v1', name: 'Rose Gold', size: 'Set', price: 950.00 }] },
    { id: 'jwl506', name: 'Polki Diamond Bridal Set', brand: 'UncutBeauty', category: 'Bridal Sets', baseImageUrl: '/content/h6.jpg', description: 'Exquisite Polki diamond set, raw and uncut diamonds in traditional settings, unique bridal charm.', rating: 4.9, variants: [{ id: 'jwl506-v1', name: 'Gold Polki', size: 'Set', price: 2500.00 }] },
    { id: 'jwl507', name: 'Temple Jewelry Bridal Set', brand: 'DevotionalDesigns', category: 'Bridal Sets', baseImageUrl: '/content/h7.jpg', description: 'Traditional South Indian temple jewelry set, rich with cultural motifs and craftsmanship.', rating: 4.8, variants: [{ id: 'jwl507-v1', name: 'Antique Gold', size: 'Set', price: 1100.00 }] },
    { id: 'jwl508', name: 'Crystal Choker Bridal Set', brand: 'ShineOn', category: 'Bridal Sets', baseImageUrl: '/content/h8.jpg', description: 'Sparkling crystal choker necklace and earring set, adds a glamorous touch to any bridal outfit.', rating: 4.6, variants: [{ id: 'jwl508-v1', name: 'Silver Crystal', size: 'Set', price: 650.00 }] },
    
];

export default jewelryProducts;

// Helper function to get unique categories for filters
export const getUniqueJewelryCategories = () => {
    const categories = jewelryProducts.map(product => product.category);
    // Add 'All' to the beginning of the list of unique categories
    return ['All', ...new Set(categories)];
};
