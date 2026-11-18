// Static transaction data generator for massive datasets
function generateTransactionData(count) {
    var merchants = [
        'TestVendor Pharma', 'SampleCorp Tours15', 'DemoSoft Airline22', 'TestVendor Mall04',
        'SampleCorp Taxi11', 'DemoSoft Creator18', 'MockData Carrier25', 'TechStore Market',
        'FastFoods Delivery', 'ShopHub Express', 'TravelMax Booking', 'PaymentGateway Pro'
    ];
    
    var categories = [
        'Airlines', 'Streaming', 'Travel', 'Ride Share', 'Home & Garden',
        'Retail', 'Entertainment', 'Food & Drink', 'Shopping', 'Utilities'
    ];
    
    var statuses = ['Declined', 'Pending', 'Cancelled', 'Completed'];
    
    var data = [];
    // Calculate last 6 months date range
    var today = new Date(2026, 6, 1);
    var sixMonthsAgo = new Date(2026, 0, 1);
    
    for (var i = 1; i <= count; i++) {
        var merchantIdx = (i - 1) % merchants.length;
        var categoryIdx = (i - 1) % categories.length;
        var statusIdx = (i - 1) % statuses.length;
        var amount = 50 + ((i * 17) % 450);
        var paddedId = ('00000000' + i).slice(-8);
        
        // Generate static 4-digit card numbers
        var digit1 = (i * 13) % 10;
        var digit2 = (i * 23) % 10;
        var digit3 = (i * 31) % 10;
        var digit4 = (i * 41) % 10;
        var cardNum = digit1.toString() + digit2.toString() + digit3.toString() + digit4.toString();
        
        // Generate dates within last 6 months
        var daysInRange = Math.floor((today.getTime() - sixMonthsAgo.getTime()) / (1000 * 60 * 60 * 24));
        var daysOffset = (i * 41) % daysInRange;
        var timestamp = new Date(sixMonthsAgo);
        timestamp.setDate(timestamp.getDate() + daysOffset);
        timestamp.setHours((i * 2) % 24);
        timestamp.setMinutes((i * 13) % 60);
        
        data.push({
            TransactionID: 'TXN-' + paddedId,
            MerchantName: merchants[merchantIdx],
            Category: categories[categoryIdx],
            Card: '****' + cardNum,
            Amount: amount,
            Timestamp: timestamp,
            Status: statuses[statusIdx]
        });
    }
    return data;
}
