var instance = new ej.base.Internationalization();
    var format = function (value) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    };
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: textdata,
        childMapping: 'Children',
        treeColumnIndex: 0,
        rowTemplate: '#rowtemplate',
        height: 250,
        width: 'auto',
        rowHeight: 83,
        columns: [
            { field: 'EmpID', headerText: 'Employee ID', width: '150' },
            { field: 'Address', headerText: 'Employee Details', width: '350' },
            { field: 'DOB', headerText: 'DOB', width: '150' }
        ]
    });
    treegrid.appendTo('#TreeGrid');


