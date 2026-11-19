// Data generation for buffer configuration sample
var productNames = [
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

var categories = ['Books', 'Sports', 'Electronics', 'Clothing', 'Food'];

function generateProductData(count) {
    var data = [];
    for (var i = 0; i < count; i++) {
        var category = categories[i % categories.length];
        var productName = productNames[i % productNames.length];
        var availableStock = Math.floor(Math.random() * 1500) + 50;
        var unitPrice = Math.floor(Math.random() * 450) + 50;
        
        data.push({
            SKUID: 'SKU-' + String(i + 1).padStart(5, '0'),
            ProductName: productName,
            Category: category,
            AvailableStock: availableStock,
            UnitPrice: unitPrice
        });
    }
    return data;
}

var productData = generateProductData(1000);
