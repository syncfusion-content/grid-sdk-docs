ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter);

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    allowFiltering: true,
    filterSettings: {type: 'Menu'},
    treeColumnIndex: 1,
    columns: [
            { field: 'taskID', headerText: 'Task ID', width: 75, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 120, textAlign: 'Left' },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right', filter: {
                ui: {
                     create: function(args){
                            var flValInput = ej.base.createElement('input', { className: 'flm-input' });
                            args.target.appendChild(flValInput);
                            this.dropInstance = new ej.dropdowns.DropDownList({
                                dataSource: ['All', '1', '3', '4', '5', '6', '8', '9'],
                                value: 'All', popupHeight: '200px'
                            });
                            this.dropInstance.appendTo(flValInput);
                        },
                        write: function(args){
                            this.dropInstance.value = args.filteredValue;
                        },
                        read: function(args) {
                            args.fltrObj.filterByColumn(args.column.field, args.operator, parseInt(this.dropInstance.value));

                        }
                }}
            }
    ]
});

treeGridObj.appendTo('#TreeGrid');

