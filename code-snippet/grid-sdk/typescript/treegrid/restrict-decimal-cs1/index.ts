


import { TreeGrid, Edit, Toolbar } from "@syncfusion/ej2-treegrid";
import { stackedData } from './datasource.ts';

TreeGrid.Inject(Edit, Toolbar);

let treegrid: TreeGrid = new TreeGrid({
  dataSource: stackedData,
  childMapping: "subtasks",
  treeColumnIndex: 1,
  height: 265,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  toolbar: ["Add", "Delete", "Update", "Cancel"],
  columns: [
    { field: "orderID", headerText: "Order ID", textAlign: "Right", isPrimaryKey: true, width: 70 },
    { field: "orderName", headerText: "Order Name", width: 100 },
    { field: "orderDate", headerText: "Order Date", textAlign: "Right", width: 100, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
    { field: "shippedDate", headerText: "Shipped Date", textAlign: "Right", width: 100,
      editType: "datepickeredit", format: { skeleton: "yMd", type: "date" } },
    { field: "shipMentCategory", headerText: "Shipment Category", textAlign: "Right", width: 100 },
    { field: "units", headerText: "Units", width: 90, editType: "numericedit" },
    { field: "price", headerText: "Price", width: 90, editType: "numericedit",
      edit: {
        params: {
          validateDecimalOnType: true,
          decimals: 0,
          format: "N"
        }
      }
    }
  ]
});
treegrid.appendTo("#TreeGrid");



