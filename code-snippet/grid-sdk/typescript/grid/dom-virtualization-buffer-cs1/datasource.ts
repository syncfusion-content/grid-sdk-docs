// Data generation for buffer configuration sample
const productNames: string[] = [
    'Business Strategy', 'Dumbbell Set', 'Portable SSD', 'Running Shorts', 'Whole Wheat Bread',
    'Cooking Basics', 'Resistance Bands', 'Monitor Stand', 'Athletic Shoes', 'Yoga Mat',
    'Protein Powder', 'Gaming Mouse', 'Coffee Maker', 'Winter Jacket', 'Smart Watch',
    'Desk Lamp', 'Wireless Earbuds', 'Office Chair', 'Water Bottle', 'Laptop Bag',
    'Keyboard', 'USB Cable', 'Power Bank', 'Notebook Set', 'Pen Collection',
    'Tennis Racket', 'Basketball', 'Soccer Ball', 'Headphones', 'Tablet Stand',
    'Phone Case', 'Screen Protector', 'Camera Lens', 'Backpack', 'Travel Mug',
    'Blender', 'Toaster', 'Rice Cooker', 'Air Fryer', 'Mixer',
    'Cutting Board', 'Knife Set', 'Pan Set', 'Dish Rack', 'Storage Box',
    'Pillow', 'Blanket', 'Towel Set', 'Bath Mat', 'Shower Curtain'
];

const categories: string[] = ['Books', 'Sports', 'Electronics', 'Clothing', 'Food'];

function generateProductData(count: number): Object[] {
    const data: Object[] = [];
    for (let i = 0; i < count; i++) {
        const category = categories[i % categories.length];
        const productName = productNames[i % productNames.length];
        const availableStock = Math.floor(Math.random() * 1500) + 50;
        const unitPrice = Math.floor(Math.random() * 450) + 50;
        
        data.push({
            SKUID: `SKU-${String(i + 1).padStart(5, '0')}`,
            ProductName: productName,
            Category: category,
            AvailableStock: availableStock,
            UnitPrice: unitPrice
        });
    }
    return data;
}

export let productData: Object[] = generateProductData(1000);
