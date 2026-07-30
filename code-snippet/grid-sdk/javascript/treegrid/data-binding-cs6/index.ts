

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

class SerialNoAdaptor extends WebApiAdaptor {
    public processResponse(): Object[] {
        let i: number = 0;
        // calling base class processResponse function
        let original: Object[] = super.processResponse.apply(this, arguments);
        // adding serial number
        original.forEach((item: Object) => item['Sno'] = ++i);
        return original;
    }
}

let data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/SelfReferenceData',
    adaptor: new SerialNoAdaptor, crossDomain: true, offline: true
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    height: 260,
    treeColumnIndex: 1,
        columns: [
        { field: 'Sno', width: 120, headerText: 'SNO', textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
treegrid.appendTo('#TreeGrid');



