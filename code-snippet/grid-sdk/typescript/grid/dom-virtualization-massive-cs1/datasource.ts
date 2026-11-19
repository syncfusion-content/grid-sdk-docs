// Static transaction data generator for massive datasets
export function generateTransactionData(count: number) {
    const merchants = [
        'TestVendor Pharma', 'SampleCorp Tours15', 'DemoSoft Airline22', 'TestVendor Mall04',
        'SampleCorp Taxi11', 'DemoSoft Creator18', 'MockData Carrier25', 'TechStore Market',
        'FastFoods Delivery', 'ShopHub Express', 'TravelMax Booking', 'PaymentGateway Pro'
    ];
    
    const categories = [
        'Airlines', 'Streaming', 'Travel', 'Ride Share', 'Home & Garden',
        'Retail', 'Entertainment', 'Food & Drink', 'Shopping', 'Utilities'
    ];
    
    const statuses = ['Declined', 'Pending', 'Cancelled', 'Completed'];
    
    const data = [];
    // Calculate last 6 months date range
    const today = new Date(2026, 6, 1);
    const sixMonthsAgo = new Date(2026, 0, 1);
    
    for (let i = 1; i <= count; i++) {
        const merchantIdx = (i - 1) % merchants.length;
        const categoryIdx = (i - 1) % categories.length;
        const statusIdx = (i - 1) % statuses.length;
        const amount = 50 + ((i * 17) % 450);
        const paddedId = ('00000000' + i).slice(-8);
        
        // Generate static 4-digit card numbers
        const digit1 = (i * 13) % 10;
        const digit2 = (i * 23) % 10;
        const digit3 = (i * 31) % 10;
        const digit4 = (i * 41) % 10;
        const cardNum = `${digit1}${digit2}${digit3}${digit4}`;
        
        // Generate dates within last 6 months
        const daysInRange = Math.floor((today.getTime() - sixMonthsAgo.getTime()) / (1000 * 60 * 60 * 24));
        const daysOffset = (i * 41) % daysInRange;
        const timestamp = new Date(sixMonthsAgo);
        timestamp.setDate(timestamp.getDate() + daysOffset);
        timestamp.setHours((i * 2) % 24);
        timestamp.setMinutes((i * 13) % 60);
        
        data.push({
            TransactionID: `TXN-${paddedId}`,
            MerchantName: merchants[merchantIdx],
            Category: categories[categoryIdx],
            Card: `****${cardNum}`,
            Amount: amount,
            Timestamp: timestamp,
            Status: statuses[statusIdx]
        });
    }
    return data;
}
