import { TreeGrid, Page, Aggregate, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-treegrid';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { summaryData } from './datasource.ts';
import { getObject, CustomSummaryType, AggregateQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';

TreeGrid.Inject(Page, Aggregate, Toolbar, PdfExport, ExcelExport);

let selectedCategory: string = 'Seafood';
let categoryDropdown: DropDownList | null = null;
const categoryOptions: { [key: string]: Object; }[] = [
  { food: 'Seafood' },
  { food: 'Dairy' },
  { food: 'Edible' },
  { food: 'Crystal' },
];

//Custom aggregate function to calculate the count of items for the selected category.
const customAggregateFn: CustomSummaryType = (data: object): number => {
  const records: any = (data as any).result ? getObject('result', data) : data;
  return records.reduce((count: number, item: Object) => {
    const category = getObject('category', item) as string;
    return category === selectedCategory ? count + 1 : count;
  }, 0);
};

//Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
const formatExcelAggregateCell = (args: AggregateQueryCellInfoEventArgs): void => {
  if ((args.cell as any).column.headerText === 'Category') {
    (args.style as any).value = `Count of ${selectedCategory} : ${(args.row as any).data.category.Custom}`;
  }
};

//Initializes a DropDownList in the footer for category selection.
const onDataBound: any = () => {
  if (categoryDropdown && categoryDropdown.element && categoryDropdown.element.classList.contains('e-' + categoryDropdown.getModuleName())) {
    categoryDropdown.destroy();
  }
  categoryDropdown = new DropDownList({
    dataSource: categoryOptions,
    fields: { value: 'food' },
    placeholder: 'Select a Category',
    width: '110px',
    value: selectedCategory,
    change: () => {
      setTimeout(() => {
        if (categoryDropdown && categoryDropdown.value) {
          selectedCategory = categoryDropdown.value.toString();
          treeGrid.refresh();
        }
      }, 300);
    }
  });
  categoryDropdown.appendTo('#customers');
}

const treeGrid = new TreeGrid({
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
  aggregates: [{
    showChildSummary: false,
    columns: [
      {
        type: 'Custom',
        customAggregate: customAggregateFn,
        columnName: 'category',
        format: 'C2',
        footerTemplate: (data: any) => {
          return `<span>Count of <input type="text" id="customers" /> : ${data.Custom}</span>`;
        }
      },
    ]
  }]
});

treeGrid.appendTo('#TreeGrid');

treeGrid.toolbarClick = (args: any) => {
  switch (args.item.text) {
    case 'Excel Export':
      treeGrid.excelExport();
      break;
    case 'CSV Export':
      treeGrid.csvExport();
      break;
  }
};