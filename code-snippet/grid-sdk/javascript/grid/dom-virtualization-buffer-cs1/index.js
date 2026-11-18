// Template function for SKU ID with icon
window.skuTemplate = function(data) {
    if (!data || !data.SKUID) {
        return '';
    }
    return '<div style="display: flex; align-items: center; gap: 8px;">' +
           '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
           '<rect x="2" y="2" width="12" height="12" rx="2" stroke="#6366F1" stroke-width="1.5" fill="none"/>' +
           '<path d="M5 6H11M5 8H11M5 10H9" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round"/>' +
           '</svg>' +
           '<span style="font-size: 13px; color: #4B5563;">' + data.SKUID + '</span>' +
           '</div>';
};

// Template function for Product Name with icon
window.productTemplate = function(data) {
    if (!data || !data.ProductName) {
        return '';
    }
    return '<div style="display: flex; align-items: center; gap: 8px;">' +
           '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
           '<path d="M2 2L3.5 2.5L4.5 10.5C4.5 11.3 5.2 12 6 12H12.5C13.3 12 14 11.3 14 10.5L14.5 5.5H4" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
           '<circle cx="6.5" cy="13.5" r="1" fill="#10B981"/>' +
           '<circle cx="12" cy="13.5" r="1" fill="#10B981"/>' +
           '</svg>' +
           '<span style="font-size: 13px; color: #1F2937;">' + data.ProductName + '</span>' +
           '</div>';
};

// Template function for category badges
window.categoryTemplate = function(data) {
    if (!data || !data.Category) {
        return '';
    }
    var category = data.Category;
    var className = 'category-' + category.toLowerCase();
    return '<div class="category-badge ' + className + '">' + category + '</div>';
};

// Template function for available stock progress bars
window.stockTemplate = function(data) {
    var stock = data.AvailableStock;
    var progressId = 'progress-' + data.SKUID.replace(/[^a-zA-Z0-9]/g, '');
    
    return '<div style="display: flex; align-items: center; gap: 8px;">' +
           '<div id="' + progressId + '" style="flex: 1;"></div>' +
           '<span style="font-size: 13px; min-width: 40px; font-weight: 500;">' + stock + '</span>' +
           '</div>';
};

var grid = new ej.grids.Grid({
    dataSource: productData,
    enableDomVirtualization: true,
    allowFiltering: true,
    allowSorting: true,
    filterSettings: { type: 'Menu' },
    height: 500,
    rowHeight: 50,
    domVirtualizationSettings: {
        rowBuffer: 5
    },
    queryCellInfo: function(args) {
        if (args.column.field === 'AvailableStock' && args.data) {
            var stock = args.data.AvailableStock;
            var maxStock = 1500;
            var percentage = Math.min((stock / maxStock) * 100, 100);
            
            var progressColor = '#e74c3c';
            if (percentage > 60) {
                progressColor = '#27ae60';
            } else if (percentage > 30) {
                progressColor = '#f39c12';
            }
            
            var progressId = 'progress-' + args.data.SKUID.replace(/[^a-zA-Z0-9]/g, '');
            var element = args.cell.querySelector('#' + progressId);
            
            if (element && !element.classList.contains('e-progressbar')) {
                var progressBar = new ej.progressbar.ProgressBar({
                    type: 'Linear',
                    height: '8',
                    value: percentage,
                    trackColor: '#ecf0f1',
                    progressColor: progressColor,
                    cornerRadius: 'Round',
                    animation: {
                        enable: true,
                        duration: 300,
                        delay: 0
                    }
                });
                progressBar.appendTo(element);
            }
        }
    },
    columns: [
        { 
            field: 'SKUID', 
            headerText: 'SKU ID', 
            width: 160,
            isPrimaryKey: true,
            template: '#skuTemplate'
        },
        { 
            field: 'ProductName', 
            headerText: 'Product Name', 
            width: 220,
            template: '#productTemplate'
        },
        { 
            field: 'Category', 
            headerText: 'Category', 
            width: 160,
            template: '#categoryTemplate'
        },
        { 
            field: 'AvailableStock', 
            headerText: 'Available Stock', 
            width: 200,
            template: '#stockTemplate'
        },
        { 
            field: 'UnitPrice', 
            headerText: 'Unit Price', 
            width: 140, 
            format: 'C2', 
            textAlign: 'Right' 
        }
    ]
});

grid.appendTo('#Grid');

// Initialize Slider for row buffer size
var rowBufferSlider = new ej.inputs.Slider({
    min: 1,
    max: 20,
    value: 5,
    type: 'MinRange',
    tooltip: { isVisible: true, placement: 'Before' },
    change: function(args) {
        var bufferValue = document.getElementById('bufferValue');
        if (bufferValue) {
            bufferValue.textContent = args.value.toString();
        }
        if (grid && grid.domVirtualizationSettings) {
            grid.domVirtualizationSettings.rowBuffer = args.value;
        }
    }
});

rowBufferSlider.appendTo('#rowBuffer');
