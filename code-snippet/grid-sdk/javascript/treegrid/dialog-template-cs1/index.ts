

import { TreeGrid, Edit, Toolbar, DialogEditEventArgs, SaveEventArgs } from '@syncfusion/ej2-treegrid';
import { sampleData } from './datasource.ts';
import { DataUtil } from '@syncfusion/ej2-data';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

TreeGrid.Inject(Edit, Toolbar);

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog',
    template: '#dialogtemplate' },
    treeColumnIndex: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'taskName', headerText: 'Task Name', width: 180 },
        {
            field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'
        },
        { field: 'progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ],
    height: 270,
    actionBegin: (args: SaveEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['progress'] = parseFloat(args.form.querySelector("#progress").value);
        }
    },
    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('progress', {max: 100});
            // EJ2-control Rendering
            let priorityData: {}[] = DataUtil.distinct(treeGridObj.grid.dataSource, 'priority',true);
            new DropDownList({value: args.rowData.priority, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: priorityData, fields: {text: 'priority', value: 'priority'}, placeholder: 'Priority'}, args.form.elements.namedItem('priority') as HTMLInputElement);

            new DatePicker({value: args.rowData.startDate, floatLabelType: 'Always', placeholder: 'Start Date'}, args.form.elements.namedItem('startDate') as HTMLInputElement)

            new DatePicker({value: args.rowData.endDate, floatLabelType: 'Always', placeholder: 'End Date'}, args.form.elements.namedItem('endDate') as HTMLInputElement)

            new CheckBox({ label: 'Approved', checked: args.rowData.approved }, args.form.elements.namedItem('approved'));

            new NumericTextBox({value: args.rowData.progress, format: 'n', placeholder: 'Progress', floatLabelType: 'Always' }, args.form.elements.namedItem('progress') as HTMLInputElement );
             // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('taskName')as HTMLInputElement).focus();
            }
        }
    }
});
treeGridObj.appendTo('#TreeGrid');



