var selectedCategory = 'Seafood';
var categoryDropdown = null;

var categoryOptions = [
  { food: 'Seafood' },
  { food: 'Dairy' },
  { food: 'Edible' },
  { food: 'Crystal' },
];

// Custom aggregate function to calculate the count of items for the selected category.
var customAggregateFn = function (data) {
  var records = data.result ? ej.grids.getObject('result', data) : data;
  return records.reduce(function (count, item) {
    var category = ej.grids.getObject('category', item);
    return category === selectedCategory ? count + 1 : count;
  }, 0);
};

//Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
var formatExcelAggregateCell = function (args) {
  if (args.cell.column.headerText === 'Category') {
    args.style.value =
      'Count of ' + selectedCategory + ' : ' + args.row.data.category.Custom;
  }
};

// Initializes a DropDownList in the footer for category selection.
var onDataBound = function () {
  if ( categoryDropdown && categoryDropdown.element && categoryDropdown.element.classList.contains('e-' + categoryDropdown.getModuleName())) {
    categoryDropdown.destroy();
  }

  categoryDropdown = new ej.dropdowns.DropDownList({
    dataSource: categoryOptions,
    fields: { value: 'food' },
    placeholder: 'Select a Category',
    width: '110px',
    value: selectedCategory,
    change: function () {
      setTimeout(function () {
        if (categoryDropdown && categoryDropdown.value) {
          selectedCategory = categoryDropdown.value.toString();
          treeGrid.refresh();
        }
      }, 300);
    },
  });

  categoryDropdown.appendTo('#customers');
};

var treeGrid = new ej.treegrid.TreeGrid({
  dataSource: summaryData,
  childMapping: 'subtasks',
  width: 'auto',
  height: 400,
  treeColumnIndex: 1,
  gridLines: 'Both',
  allowExcelExport: true,
  excelAggregateQueryCellInfo: formatExcelAggregateCell,
  toolbar: ['ExcelExport', 'CsvExport'],
  dataBound: onDataBound,
  columns: [
    { field: 'ID', headerText: 'Order ID', width: 115, textAlign: 'Left' },
    { field: 'Name', headerText: 'Shipment Name', width: 230, clipMode: 'EllipsisWithTooltip' },
    { field: 'shipmentDate', headerText: 'Shipment Date', width: 135, type: 'date', format: 'yMd', textAlign: 'Right' },
    { field: 'category', headerText: 'Category', width: 220, minWidth: 210 },
    { field: 'units', headerText: 'Total Units', width: 90, type: 'number', textAlign: 'Right' },
    { field: 'unitPrice', headerText: 'Unit Price($)', width: 100, type: 'number', format: 'C2', textAlign: 'Right' },
    { field: 'price', headerText: 'Price($)', width: 140, format: 'C0', textAlign: 'Right', type: 'number' },
  ],
  aggregates: [
    {
      showChildSummary: false,
      columns: [
        {
          type: 'Custom',
          customAggregate: customAggregateFn,
          columnName: 'category',
          format: 'C2',
          footerTemplate: function (data) {
            return (
              '<span>Count of <input type="text" id="customers" /> : ' +
              data.Custom +
              '</span>'
            );
          },
        },
      ],
    },
  ],
});

treeGrid.appendTo('#TreeGrid');

treeGrid.toolbarClick = function (args) {
  switch (args.item.text) {
    case 'Excel Export':
      treeGrid.excelExport();
      break;
    case 'CSV Export':
      treeGrid.csvExport();
      break;
  }
};
