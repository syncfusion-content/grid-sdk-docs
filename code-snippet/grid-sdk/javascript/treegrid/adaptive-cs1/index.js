ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Edit, ej.treegrid.Sort, ej.treegrid.Filter, ej.treegrid.Toolbar);

var treegrid = new ej.treegrid.TreeGrid({
  dataSource: sampleData,
  enableAdaptiveUI: true,
  allowPaging: true,
  allowSorting: true,
  childMapping: 'subtasks',
  treeColumnIndex: 1,
  allowFiltering: true,
  filterSettings: { type: 'Excel' },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
  editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
  height: '100%',
  load: () => {
      treegrid.grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  },
  columns: [
      { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 135, validationRules: { required: true, number: true } },
      { field: 'taskName', headerText: 'Task Name', width: 280, editType: "dropdownedit", validationRules: { required: true } },
      { field: 'duration', headerText: 'Duration', filter: { type : 'Menu' }, width: 140, validationRules: { required: true } },
      { field: 'progress', headerText: 'Progress', width: 145 , validationRules: { required: true } },
  ]
});
treegrid.appendTo('#adaptivebrowser');

