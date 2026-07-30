ej.treegrid.TreeGrid.Inject(ej.treegrid.Filter);

var dropDownFilter;

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    height: 275,
    allowFiltering: true,
    filterSettings: { type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 75, textAlign: 'Right' },
        { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
        },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right',
          filterBarTemplate: {
                    create: function (args) {
                        var dd = document.createElement('input');
                        dd.id = 'duration';
                        return dd;
                    },
                    write: function (args) {
                        var dataSource = ['All', '1', '3', '4', '5', '6', '8', '9'];
                        dropDownFilter = new ej.dropdowns.DropDownList({
                            dataSource: dataSource,
                            value: 'All',
                            change: function (e) {
                                var valuenum = +e.value;
                                var id = dropDownFilter.element.id;
                                var value = e.value;
                                if (value !== 'All') {
                                    treeGridObj.filterByColumn(id, 'equal', valuenum);
                                }
                                else {
                                    treeGridObj.removeFilteredColsByField(id);
                                }
                            }
                        });
                        dropDownFilter.appendTo('#duration');
                    } 
            } 
        }
    ]
});

treeGridObj.appendTo('#TreeGrid');

