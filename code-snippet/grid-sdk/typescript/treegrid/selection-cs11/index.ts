import { TreeGrid, Selection, VirtualScroll, Aggregate } from '@syncfusion/ej2-treegrid';
import generateGroceriesData from './datasource';

TreeGrid.Inject(Selection, VirtualScroll, Aggregate);

let data: any = generateGroceriesData();
let totalPrice: number = 0;

const calculateSelectedTotal = (): number => {
  const checkedRecords: any = treegrid.getCheckedRecords();
  const checkedRecordsPrice = checkedRecords.reduce((sum: number, rec: any) => sum + (parseFloat(rec.price) || 0), 0);
  return checkedRecordsPrice;
};


const updateFooterTotal = () => {
  totalPrice = calculateSelectedTotal();
  const footerEl = treegrid.getFooterContent().querySelector('.selected-total') as (HTMLElement | null);
  if (footerEl) {
    footerEl.innerHTML = `Total Price of Selected Rows: <strong>$${totalPrice.toFixed(2)}</strong>`;
  }
};


let treegrid: TreeGrid = new TreeGrid({
  dataSource: data,
  childMapping: "items",
  treeColumnIndex: 1,
  height: 400,
  enableVirtualization: true,
  selectionSettings: { persistSelection: true, type:'Multiple'},
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
    { field: "id", headerText: "ID", width: 80, isPrimaryKey: true, visible: false},    
    { field: "name", headerText: "Item", width: 150, showCheckbox: true},
    { field: "description", headerText: "Description", width: 200},
    { field: "quantity", headerText: "Quantity", width: 120, textAlign: 'Right' },
    { field: "price", headerText: "Price", width: 200, textAlign: 'Right', format: 'C2' },
    { field: "status", headerText: "Status", width: 100},
    { field: "popularity", headerText: "Popularity", width: 150 }
  ],
});

treegrid.appendTo('#TreeGrid');

treegrid.checkboxChange = ()=> {
  updateFooterTotal();
}

treegrid.dataBound = ()=> {
  updateFooterTotal();
}
