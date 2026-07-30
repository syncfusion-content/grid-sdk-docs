

import { TreeGrid, Filter } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

TreeGrid.Inject(Filter);

let treeGridObj: TreeGrid = new TreeGrid({
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
                    create: (args: { target: Element, column: Object }) => {
                        let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                        args.target.appendChild(flValInput);
                        let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                        this.dropDownFilter = new DropDownList({
                            dataSource: dataSource,
                            value: 'All', popupHeight: '200px'
                        });
                        this.dropDownFilter.appendTo(flValInput);
                    },
                    write: (args: {
                        column: Object, target: Element, parent: any,
                        filteredValue: number | string
                    }) => {
                        this.dropDownFilter.value = args.filteredValue;
                    },
                    read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                        args.fltrObj.filterByColumn(args.column.field, args.operator, parseInt(this.dropDownFilter.value));

                    }
                }}
            }
    ]
});

treeGridObj.appendTo('#TreeGrid');



