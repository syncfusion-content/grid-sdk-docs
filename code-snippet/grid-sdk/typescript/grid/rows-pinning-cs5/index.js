var grid = new ej.grids.Grid({
  dataSource: taskData,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  allowPaging: true,
  isRowPinned: function (data) {
    if (data && data.Status === 'Open' && data.Priority === 'Critical') {
      return true;
    }
    return false;
  },
  height: 180,
  columns: [
    { field: 'TaskID', headerText: 'Task ID', width: 100, isPrimaryKey: true, textAlign: 'Right' },
    { field: 'Title', headerText: 'Title', width: 100 },
    { field: 'Status', headerText: 'Status', width: 100 },
    { field: 'Assignee', headerText: 'Assignee', width: 100 },
    { field: 'Priority', headerText: 'Priority', width: 100 }
  ]

});
grid.appendTo('#PinnedRows');
