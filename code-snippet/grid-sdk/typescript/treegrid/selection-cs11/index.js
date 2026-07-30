
    
    
    var data = generateGroceriesData();
    var totalPrice = 0;
    var calculateSelectedTotal = function () {
        var checkedRecords = treegrid.getCheckedRecords();
        var checkedRecordsPrice = checkedRecords.reduce(function (sum, rec) { return sum + (parseFloat(rec.price) || 0); }, 0);
        return checkedRecordsPrice;
    };
    var updateFooterTotal = function () {
        totalPrice = calculateSelectedTotal();
        var footerEl = treegrid.getFooterContent().querySelector('.selected-total');
        if (footerEl) {
            footerEl.innerHTML = "Total Price of Selected Rows: <strong>$" + totalPrice.toFixed(2) + "</strong>";
        }
    };
    var treegrid = new src_1.TreeGrid({
        dataSource: data,
        childMapping: "items",
        treeColumnIndex: 1,
        height: 400,
        enableVirtualization: true,
        selectionSettings: { persistSelection: true, type: 'Multiple' },
        autoCheckHierarchy: true,
        aggregates: [{
                showChildSummary: false,
                columns: [{
                        type: 'Custom',
                        columnName: 'price',
                        footerTemplate: '<span class="selected-total">Total Price: $0.00</span>'
                    }]
            }],
        columns: [
            { field: "id", headerText: "ID", width: 80, isPrimaryKey: true, visible: false },
            { field: "name", headerText: "Item", width: 150, showCheckbox: true },
            { field: "description", headerText: "Description", width: 200 },
            { field: "quantity", headerText: "Quantity", width: 120, textAlign: 'Right' },
            { field: "price", headerText: "Price", width: 200, textAlign: 'Right', format: 'C2' },
            { field: "status", headerText: "Status", width: 100 },
            { field: "popularity", headerText: "Popularity", width: 150 }
        ],
    });
    treegrid.appendTo('#TreeGrid');
    treegrid.checkboxChange = function (args) {
        updateFooterTotal();
    };
    treegrid.dataBound = function (args) {
        updateFooterTotal();
    };