

import { TreeGrid, Page, Sort } from '@syncfusion/ej2-treegrid';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
TreeGrid.Inject(Page, Sort);
    let data = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/SelfReferenceData',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });
    let treegrid: TreeGrid = new TreeGrid(
        {
            dataSource: data,
            hasChildMapping: 'isParent',
            idMapping: 'TaskID',
            parentIdMapping: 'ParentItem',
            height: 400,
            treeColumnIndex: 1,
            allowPaging: true,
            allowSorting: true,
            loadingIndicator: { indicatorType: 'Shimmer' },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', width: 120, textAlign: 'Right' },
                { field: 'TaskName', headerText: 'Task Name', width: 240, textAlign: 'Left' },
                { field: 'StartDate', headerText: 'Start Date', width: 140, textAlign: 'Right', type: 'date', format: 'yMd' },
                { field: 'Duration', headerText: 'Duration', width: 130, textAlign: 'Right' },
                { field: 'Progress', headerText: 'Progress', width: 130 },
            ],
            pageSettings: { pageCount: 3 }
        });
    treegrid.appendTo('#TreeGrid');


