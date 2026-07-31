var filterDropData = [
  { Type: 'All', Value: null },
  { Type: 'Base', Value: FileType.Base },
  { Type: 'Replace', Value: FileType.Replace },
  { Type: 'Delta', Value: FileType.Delta }
];

function dropDownCreate() {
  var dropDown = document.createElement('select');
  dropDown.id = 'TypeFilter';
  
  filterDropData.forEach((item) => {
      var option = document.createElement('option');
      option.value = item.Value !== null ? item.Value.toString() : 'All';
      option.innerText = item.Type;
      dropDown.appendChild(option);
  });
  return dropDown;
}

function dropDownWrite() {
  var dropDownList = new ej.dropdowns.DropDownList({
      change: function (args) {
          var grid = document.getElementById("Grid").ej2_instances[0];
          if (args.value !== 'All') {
              grid.filterByColumn('Type', 'equal', Number(args.value));
          } else {
              grid.removeFilteredColsByField('Type');
          }
      }
  });
  dropDownList.appendTo('#TypeFilter');
}

function fileTypeTemplate(data) {
  return `<span>${FileTypeText[data.Type] || "Unknown"}</span>`;
}

var grid = new ej.grids.Grid({
  dataSource: Data,
  allowFiltering: true,
  height: 273,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Right', isPrimaryKey: true },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'ShipName', headerText: 'Ship Name', width: 100 },
      { field: 'Type', headerText: 'File Type', width: 170, filterBarTemplate: { create: dropDownCreate, write: dropDownWrite }, template: fileTypeTemplate }
  ]
});
grid.appendTo('#Grid');