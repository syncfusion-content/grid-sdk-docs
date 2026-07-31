ej.treegrid.TreeGrid.Inject(ej.treegrid.DetailRow);

var instance = new ej.base.Internationalization();
    var format = function (value) {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    };

var treegrid = new ej.treegrid.TreeGrid({
            dataSource: textdata,
            childMapping: 'Children',
            treeColumnIndex: 0,
            detailTemplate: '#detailtemplate',
            width: 'auto',
            columns: [
                { field: 'Name', headerText: 'First Name', width: '170' },
                { field: 'Designation', headerText: 'Designation', width: '180' },
                { field: 'EmpID', headerText: 'EmployeeID', width: '110'},
                { field: 'Country', headerText: 'Country' , width: '90'},
            ]
        });
    
    treegrid.appendTo('#TreeGrid');


