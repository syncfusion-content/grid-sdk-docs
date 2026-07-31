ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

class SerialNoAdaptor extends ej.data.WebApiAdaptor {
    processResponse(){
        var i = 0;
        // calling base class processResponse function
        var original = super.processResponse.apply(this, arguments);
        // adding serial number
        original.forEach((item) => item['Sno'] = ++i);
        return original;
    }
}

var data = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/SelfReferenceData',
        adaptor: new SerialNoAdaptor,
        crossDomain: true,
        offline: true
});

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    height: 260,
    treeColumnIndex: 1,
    allowPaging: true,
    columns: [
        { field: 'Sno', width: 120, headerText: 'SNO', textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
    ]
});
    
treeGridObj.appendTo('#TreeGrid');

