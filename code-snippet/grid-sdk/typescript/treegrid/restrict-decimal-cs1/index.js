ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.Toolbar);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: var stackedData,
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
    { field: "shippedDate", headerText: "Shipped Date", textAlign: "Right", width: 100, editType: "datepickeredit",
      format: { skeleton: "yMd", type: "date" } },
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

