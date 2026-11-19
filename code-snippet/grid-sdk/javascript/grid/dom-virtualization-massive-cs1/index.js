// Template function for Transaction ID with icon
window.transactionTemplate = function(data) {
    if (!data || !data.TransactionID) {
        return '';
    }
    return '<div class="transaction-cell">' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="8" cy="8" r="6.5" stroke="#6366F1" stroke-width="1.5"/>' +
                    '<path d="M5 8L7 10L11 6" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>' +
                '<span>' + data.TransactionID + '</span>' +
            '</div>';
};

// Template function for Merchant Name with icon
window.merchantTemplate = function(data) {
    if (!data || !data.MerchantName) {
        return '';
    }
    return '<div class="merchant-cell">' +
                '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>' +
                '<span>' + data.MerchantName + '</span>' +
            '</div>';
};

// Template function for Category badges with SVG icons
window.categoryTemplate = function(data) {
    if (!data || !data.Category) {
        return '';
    }
    return '<div class="category-badge category-cell">' +
                '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path></svg>' +
                '<span>' + data.Category + '</span>' +
            '</div>';
};

// Template function for Status with SVG badges
window.statusTemplate = function(data) {
    if (!data || !data.Status) {
        return '';
    }
    var status = data.Status;
    var statusClass = 'status-' + status.toLowerCase();
    var svg = '';
    
    switch(status) {
        case 'Declined':
            svg = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
                    '<path d="M4 7H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
                   '</svg>';
            break;
        case 'Pending':
            svg = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
                    '<path d="M7 4V7L9.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
                   '</svg>';
            break;
        case 'Cancelled':
            svg = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
                    '<path d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
                   '</svg>';
            break;
        case 'Completed':
            svg = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                    '<circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
                    '<path d="M5 7L6.5 8.5L9.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                   '</svg>';
            break;
    }
    
    return '<div class="status-badge ' + statusClass + '">' + svg + '<span>' + status + '</span></div>';
};

// Generate 100,000 transaction records
var transactionData = generateTransactionData(100000);

ej.grids.Grid.Inject(ej.grids.Selection, ej.grids.DomVirtualization);

var grid = new ej.grids.Grid({
    dataSource: transactionData,
    enableDomVirtualization: true,
    height: '500px',
    columns: [
        { 
            field: 'TransactionID', 
            width: 140, 
            headerText: 'Transaction ID',
            textAlign: 'Left',
            template: '#transactionTemplate'
        },
        { 
            field: 'MerchantName', 
            width: 180, 
            headerText: 'Merchant Name',
            textAlign: 'Left',
            template: '#merchantTemplate'
        },
        { 
            field: 'Category', 
            width: 150, 
            headerText: 'Category',
            textAlign: 'Center',
            template: '#categoryTemplate'
        },
        { 
            field: 'Card', 
            width: 120, 
            headerText: 'Card',
            textAlign: 'Center'
        },
        { 
            field: 'Amount', 
            width: 110, 
            headerText: 'Amount',
            textAlign: 'Right',
            format: 'C2'
        },
        { 
            field: 'Timestamp', 
            width: 180, 
            headerText: 'Timestamp',
            type: 'datetime',
            format: 'yMd',
            template: '<span class="timestamp-cell">${Timestamp.toLocaleDateString()}, ${Timestamp.toLocaleTimeString()}</span>'
        },
        { 
            field: 'Status', 
            width: 140, 
            headerText: 'Status',
            textAlign: 'Center',
            template: '#statusTemplate'
        }
    ],
    rowHeight: 50
});

grid.appendTo('#Grid');
